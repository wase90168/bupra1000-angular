import {Injectable, OnInit} from '@angular/core';
import {Value} from './value';
import {UzerLoginService} from '../uzer/uzer-login.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

@Injectable()
export class ValueService  {





  private valuesUrl = 'http://localhost:8080/values';



  public values: Observable<Value>;

  public value: any;

  constructor(private uzerLoginService: UzerLoginService, private http: HttpClient) { }

  public findAll(): Observable<Value> {
    let url = this.valuesUrl;

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    this
      .http
      .get(url, {headers: headers})
      .subscribe(data => {this.values = data['_embedded']['values']});


    return this.values;




  }

  public findById(id:string): Value {
    let url = this.valuesUrl + "/" + id +"?projection=inlineValue";
    let params = new HttpParams();
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    this
      .http
      .get(url, {headers: headers})
      .subscribe(data => {
        this.value = data
      });
    return this.value;




  }

  public saveValue(valueData: Value): Promise<any> {
    let url = this.valuesUrl + "/" + valueData.id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.put(url, valueData).toPromise()

}









}
