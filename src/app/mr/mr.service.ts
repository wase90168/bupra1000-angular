import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {UzerLoginService} from "../uzer/uzer-login.service";
import {MR} from "../mr/mr";
import {AppService} from "../app.service";

@Injectable()
export class MrService {

  constructor(private uzerLoginService: UzerLoginService, private http: HttpClient, private appService: AppService) { }


  private mrUrl: string = this.appService.getBaseURL() + "/mRs";


  public findAll(): Observable<MR> {
    let url = this.mrUrl;

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .map(data => {return data['_embedded']});

  }

  public findById(id:string): Observable<MR> {
    let url = this.mrUrl + "/" + id +"?projection=inlineMr";
    let params = new HttpParams();
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .map((data: MR) => {return data});


  }

  public updateMr(mrData: MR): Promise<any> {
    let url = this.mrUrl + "/" + mrData.id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.put(url, mrData).toPromise();

  }

  public deleteMr(id: string): Promise<any>{
    let url = this.mrUrl + "/" + id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.delete(url,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();


  }

  createMr(mr: MR): Promise<any> {

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());

    return this.http.post(this.mrUrl, mr, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .toPromise()

  }






}

