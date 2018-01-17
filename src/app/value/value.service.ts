import {Injectable} from '@angular/core';
import {Value} from './value';
import {UzerLoginService} from '../uzer/uzer-login.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ValueService  {





  private valuesUrl = 'http://localhost:8080/values';

  constructor(private uzerLoginService: UzerLoginService, private http: HttpClient) { }

  public findAll(): Observable<Value> {
    let url = this.valuesUrl;

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers: headers})
      .map(data => {return data['_embedded']});

  }

  public findById(id:string): Observable<Value> {
    let url = this.valuesUrl + "/" + id +"?projection=inlineValue";
    let params = new HttpParams();
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


     return this
      .http
      .get(url, {headers: headers})
      .map((data: Value) => {return data});


  }

  public updateValue(valueData: Value): Promise<any> {
    let url = this.valuesUrl + "/" + valueData.id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.put(url, valueData).toPromise();

}

  public deleteValue(id: string): Promise<any>{
    let url = this.valuesUrl + "/" + id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.delete(url).toPromise();


  }


}
