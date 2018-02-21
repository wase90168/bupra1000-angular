import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {Observable} from 'rxjs/Observable';
import {Uzer} from './uzer';


@Injectable()
export class UzerLoginService {

  public _storage: Storage = localStorage;
  public _message: string;
  private uzersUrl: string = this.appService.getBaseURL() + '/uzers';

  private uzer: Uzer;
  public admin: boolean = false;

  constructor(private http: HttpClient, private router: Router, private appService: AppService) {


  }

  public setMessage(message: string) {
    this._message = message;
  }

  public getMessage(): string {
    return this._message;
  }

  public setStorage(storage: Storage) {
    this._storage = storage;
  }


  loadUserProfile(userName: string, password: string) {
    let findByUsername = "/search/findByUsername";
    return new Promise((resolve, reject) => {

      let headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa(userName + ':' + password));



      this.http.get(this.uzersUrl + findByUsername + "?" + "username=" + userName + "&projection=inlineUzer", {headers: headers}).subscribe(
        (userInfo) => {
          console.debug('userinfo received', userInfo);
          this._storage.setItem('userInfo', JSON.stringify(userInfo));
          this._storage.setItem('username', userName);
          this._storage.setItem('password', password);

          resolve(userInfo);
        },
        (err) => {
          console.error('Error loading user info', err);
          reject(err);
        }
      );
    }).then(exec => {this.isAdmin();});


  }

  loadUserProfileCustom(userName: string, password: string): Observable<Uzer>{
    let findByUsername = "/search/findByUsername";
    let headers = new HttpHeaders().set("Authorization", "Basic " + btoa(userName + ":" + password));
    let params = new HttpParams().set('username', userName).set('projection','inlineUzer');

    return this.http.get(this.uzersUrl+findByUsername+"?"+ "username=" + userName + "&projection=inlineUzer",{headers:headers}).map((data: Uzer)=> {return data})

  }

  isLoggedIn() {
    if (this._storage.getItem('username') == null) {
      return false
    }
    else {
      return true
    }
  }

  authorizationHeader() {
    return "Basic " + btoa(this._storage.getItem('username') + ":" + this._storage.getItem('password'));
  }


  logOut() {
    this._storage.clear();
    this.admin = false;
  }

  isAdmin():boolean {
    this.uzer = JSON.parse(this._storage.getItem('userInfo'));

    for(let role of this.uzer.roles)
    {
      if(role.name == 'ROLE_ADMIN' )
      {
        this.admin = true
      }
    }

    return this.admin;
  }

}
