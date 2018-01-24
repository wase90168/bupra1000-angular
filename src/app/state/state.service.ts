import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {UzerLoginService} from "../uzer/uzer-login.service";
import {State} from "../state/state";
import {AppService} from "../app.service";
import {Value} from "../value/value";

@Injectable()
export class StateService {

  constructor(private uzerLoginService: UzerLoginService, private http: HttpClient, private appService: AppService) { }


  private stateUrl: string = this.appService.getBaseURL() + "/states";

  public findAll(): Observable<State> {
    let url = this.stateUrl;

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .map(data => {return data['_embedded']});

  }

  public findById(id:string): Observable<State> {
    let url = this.stateUrl + "/" + id +"?projection=inlineState";
    let params = new HttpParams();
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .map((data: State) => {return data});


  }

  public updateState(stateData: State): Promise<any> {
    let url = this.stateUrl + "/" + stateData.id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.put(url, stateData,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();

  }

  public updateStateValue(value: Value): Promise<any> {
    let url = this.stateUrl + "/value/";
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.patch(url, value,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();

  }

  public deleteState(id: string): Promise<any>{
    let url = this.stateUrl + "/" + id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.delete(url,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();


  }

  createState(state: State): Promise<any> {

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());

    return this.http.post(this.stateUrl, state, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .toPromise()

  }






}


