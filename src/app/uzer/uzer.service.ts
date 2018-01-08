import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Uzer} from './Uzer';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UzerService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getUzers():  Promise<Uzer[]> {
    return this.http.get(this.baseUrl + '/uzers/')
      .toPromise()
      .catch(this.handleError);
  }

  createUzer(uzerData: Uzer): Promise<Uzer> {
    return this.http.post(this.baseUrl + '/uzers/', uzerData)
      .toPromise()
      .catch(this.handleError);
  }

  updateUzer(uzerData: Uzer): Promise<Uzer> {
    return this.http.put(this.baseUrl + '/uzers/' + uzerData.id, uzerData)
      .toPromise()
      .catch(this.handleError);
  }

  deleteUzer(id: string): Promise<any> {
    return this.http.delete(this.baseUrl + '/uzers/' + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
