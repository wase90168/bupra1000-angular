import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AppService} from "../app.service";


@Injectable()
export class UzerLoginService {

  public _storage: Storage = localStorage;
  public _message: string;
  private uzersUrl: string = this.appService.getBaseURL() + '/uzers';

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

      let headers = new HttpHeaders();
      headers.append("Authorization", "Basic " + btoa(userName + ":" + password));

      let params = new URLSearchParams();
      params.append('username', userName);

      this.http.get(this.uzersUrl + findByUsername + "?" + params.toString(), {headers: headers}).subscribe(
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
    });


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
    this._storage.clear()
  }

}
