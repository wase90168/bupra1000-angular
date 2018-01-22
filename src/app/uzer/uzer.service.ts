import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Uzer} from './uzer';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BASE_URL_UZERS} from '../app.tokens';
import {Inject} from '@angular/compiler/src/core';
import {Headers} from '@angular/http';
import {UzerLoginService} from "./uzer-login.service";

@Injectable()
export class UzerService {
  private uzersUrl = 'http://localhost:8080/uzers';

  constructor(private http: HttpClient, private uzerLoginService: UzerLoginService) { }

  getUzers():  Promise<Uzer[]> {
    return this.http.get(this.uzersUrl,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .toPromise()
      .catch(this.handleError);
  }

  createUzer(uzerData: Uzer): Promise<Uzer> {
    return this.http.post(this.uzersUrl, uzerData,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .toPromise()
      .catch(this.handleError);
  }

  updateUzer(uzerData: Uzer): Promise<Uzer> {
    return this.http.put(this.uzersUrl + "/" + uzerData.id, uzerData,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .toPromise()
      .catch(this.handleError);
  }

  deleteUzer(id: string): Promise<any> {
    return this.http.delete(this.uzersUrl +"/" + id,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
