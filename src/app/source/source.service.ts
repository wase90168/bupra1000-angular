import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {UzerLoginService} from "../uzer/uzer-login.service";
import {Source} from "../source/source";
import {AppService} from "../app.service";

@Injectable()
export class SourceService {

  constructor(private uzerLoginService: UzerLoginService, private http: HttpClient, private appService: AppService) { }


  private sourceUrl: string = this.appService.getBaseURL() + "/sources";


  public findAll(): Observable<Source> {
    let url = this.sourceUrl;

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .map(data => {return data['_embedded']});

  }

  public findById(id:string): Observable<Source> {
    let url = this.sourceUrl + "/" + id +"?projection=inlineSource";
    let params = new HttpParams();
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .map((data: Source) => {return data});


  }

  public updateSource(sourceData: Source): Promise<any> {
    let url = this.sourceUrl + "/" + sourceData.id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.put(url, sourceData,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();

  }

  public deleteSource(id: string): Promise<any>{
    let url = this.sourceUrl + "/" + id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.delete(url,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();


  }

  createSource(source: Source): Promise<any> {

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());

    return this.http.post(this.sourceUrl, source, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .toPromise()

  }






}


