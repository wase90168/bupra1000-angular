import {Injectable} from '@angular/core';
import {Value} from './value';
import {UzerLoginService} from '../uzer/uzer-login.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AppService} from '../app.service';
import {MR} from "../mr/mr";
import {Biomarker} from "../biomarker/biomarker";
import {State} from "../state/state";
import {Source} from "../source/source";


@Injectable()
export class ValueService  {


  constructor(private uzerLoginService: UzerLoginService, private http: HttpClient, private appService: AppService) { }


  private valuesUrl: string = this.appService.getBaseURL() + '/values';

  private baseUrl: string = this.appService.getBaseURL();

  public findAll(): Observable<Value> {
    let url = this.valuesUrl+"/search/findAllByOrderByIdDesc?size=99999999";

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.uzerLoginService.authorizationHeader());



    return this
      .http
      .get(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .map((data) => {return data['_embedded']});




  }

  public findById(id:string): Observable<Value> {
    let url = this.valuesUrl + '/' + id +'?projection=inlineValue';
    let params = new HttpParams();
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


     return this
      .http
      .get(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .map((data: Value) => {return data});

  }


  public updateValue(value: Value): Promise<any> {
    let url = this.baseUrl + '/updateValue'/* + "?" +
      "value=" + value.id + "&" +
      "person=" + value.person.id + "&" +
      "biomarker=" + value.biomarker.id+ "&" +
      "source=" + value.source.id+ "&" +
      "state=" + value.state.id+ "&" +
      "mr=" + value.mr.id;*/

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());

    return this.http.put(url, value, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise().then(hallo => this.updateValueValue(value));
  }


  public updateValueValue(value: Value): Promise<any>{
    let url = this.valuesUrl + '/' + value.id;
      let headers = new HttpHeaders();
      headers.set('Accept', 'application/json');
      headers.set('Authorization', this.uzerLoginService.authorizationHeader());
      return this.http.put(url, value, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise()
    }


  public deleteValue(id: string): Promise<any>{
    let url = this.valuesUrl + '/' + id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.delete(url,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();


  }

  public createValue(value: Value): Promise<any> {
    let url = this.baseUrl + '/createValue'/* + "?" +
      "value=" + value.value + "&" +
      "person=" + value.person.id + "&" +
      "biomarker=" + value.biomarker.id+ "&" +
      "source=" + value.source.id+ "&" +
      "state=" + value.state.id+ "&" +
      "mr=" + value.mr.id;*/


    console.log(url);

    let headers = new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader()).set('Accept', 'application/json');

    return this.http.post(url,value,{headers}).toPromise();
  }

  public createValueFlow(value: string, suffix: string, prefix: string, mr: MR, biomarker: Biomarker, source: Source, state: State): Promise<any> {
    let url = this.baseUrl + '/createValueFlow' + "?" +
      "value=" + value + "&" +
      "prefix=" + prefix + "&" +
      "suffix=" + suffix + "&" +
      "biomarker=" + biomarker.id+ "&" +
      "source=" + source.id+ "&" +
      "state=" + state.id+ "&" +
      "mr=" + mr.id;


    console.log(url);

    let headers = new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader()).set('Accept', 'application/json');

    return this.http.post(url,value,{headers}).toPromise();
  }

  public createValueFlow2(value: Value, suffix: string, prefix: string): Promise<any> {
    let url = this.baseUrl + '/createValueFlow2' + "?" +
      "prefix=" + prefix + "&" +
      "suffix=" + suffix;


    console.log(url);

    let headers = new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader()).set('Accept', 'application/json');

    return this.http.post(url,value,{headers}).toPromise();
  }



}
