import {Inject, Injectable} from '@angular/core';
import {Headers, URLSearchParams} from '@angular/http';
import {BASE_URL_OAUTH2_TOKEN_REQUEST, BASE_URL_UZERS, CLIENT_APP_NAME, CLIENT_APP_SECRET} from '../app.tokens';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Uzer} from '../uzer/uzer';
import {UzerLoginService} from "../uzer/uzer-login.service";

@Injectable()
export class RegisterService {

  constructor( private http: HttpClient,@Inject(BASE_URL_UZERS) private uzersUrl:string, @Inject(BASE_URL_OAUTH2_TOKEN_REQUEST) private tokenUrl:string,
    @Inject(CLIENT_APP_NAME) private clientName:string,@Inject(CLIENT_APP_SECRET) private clientSecret:string, private uzerLoginService: UzerLoginService){}


  createUzer(username: string, password: string): Promise<Uzer> {
      /*let params = new HttpParams();
      params.set("Username",username)
      params.set("Password",password)*/

      let headers = new Headers();
      headers.set('Content-Type', 'application/x-www-form-urlencoded');
      headers.set('Authorization', 'Basic ' + btoa(this.clientName + ":" + this.clientSecret));
      return this.http.post(this.uzersUrl, {username: username, password: password},{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
        .toPromise()
        .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
      console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }

}



