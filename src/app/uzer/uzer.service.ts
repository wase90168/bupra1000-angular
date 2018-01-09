import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Uzer} from './uzer';
import {HttpClient} from '@angular/common/http';
import {BASE_URL_UZERS} from '../app.tokens';
import {Inject} from '@angular/compiler/src/core';
import {Headers} from '@angular/http';

@Injectable()
export class UzerService {
  private uzersUrl = 'http://localhost:8080/uzers';

  constructor(private http: HttpClient) { }

  getUzers():  Promise<Uzer[]> {
    return this.http.get(this.uzersUrl)
      .toPromise()
      .catch(this.handleError);
  }

  createUzer(uzerData: Uzer): Promise<Uzer> {
    return this.http.post(this.uzersUrl, uzerData)
      .toPromise()
      .catch(this.handleError);
  }

  updateUzer(uzerData: Uzer): Promise<Uzer> {
    return this.http.put(this.uzersUrl + "/" + uzerData.id, uzerData)
      .toPromise()
      .catch(this.handleError);
  }

  deleteUzer(id: string): Promise<any> {
    return this.http.delete(this.uzersUrl +"/" + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
