import {Inject, Injectable} from "@angular/core";
import {BASE_URL_OAUTH2_TOKEN_REQUEST, BASE_URL_UZERS, CLIENT_APP_NAME, CLIENT_APP_SECRET} from '../app.tokens';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {OAuthService} from "angular-oauth2-oidc";
import {Router} from "@angular/router";
import {Http} from "@angular/http";


@Injectable()
export class UzerLoginService {

  constructor(private http: HttpClient, @Inject(BASE_URL_UZERS) private uzersUrl: string, @Inject(BASE_URL_OAUTH2_TOKEN_REQUEST) private tokenUrl: string,
              @Inject(CLIENT_APP_NAME) private clientName: string, @Inject(CLIENT_APP_SECRET) private clientSecret: string, private oauthService: OAuthService, private router: Router) {



  }


  public _storage: Storage = localStorage;

  public _message: string;

  public setMessage(message: string){
    this._message = message;
  }

  public getMessage():string{
    return this._message;
  }

  public setStorage(storage: Storage) {
    this._storage = storage;
  }






  loadUserProfile(userName:string, password: string) {
    let findByUsername = "/search/findByUsername";
    return new Promise((resolve, reject) => {

      let headers = new HttpHeaders();
      headers.append("Authorization", "Basic " + btoa(userName + ":" + password));

      let params = new URLSearchParams();
      params.append('username', userName);

      this.http.get(this.uzersUrl+findByUsername+"?"+params.toString(),{headers: headers} ).subscribe(
        (userInfo) => {
          console.debug('userinfo received', userInfo);
          this._storage.setItem('userInfo', JSON.stringify(userInfo));
          this._storage.setItem('username',userName);
          this._storage.setItem('password',password);
          resolve(userInfo);
        },
        (err) => {
          console.error('Error loading user info', err);
          reject(err);
        }
      );
    });


  }

  isLoggedIn(){
    if(this._storage.getItem('username') == null){
      return false
    }
    else {
      return true
    }
  }

  authorizationHeader(){
    return "Basic " + btoa(this._storage.getItem('username') + ":" + this._storage.getItem('password'));
  }


  logOut(){
    this._storage.clear()
  }

}
