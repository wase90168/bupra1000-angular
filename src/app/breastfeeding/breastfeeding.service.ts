import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {UzerLoginService} from "../uzer/uzer-login.service";
import {BASE_URL} from "../app.tokens";
import {Breastfeeding} from "../breastfeeding/breastfeeding";
import {Observable} from "rxjs/Observable";
import {AppService} from "../app.service";

@Injectable()
export class BreastfeedingService {



  constructor(private uzerLoginService: UzerLoginService, private http: HttpClient, private appService: AppService) { }


  private breastfeedingUrl: string = this.appService.getBaseURL() + "/breastfeedings";


  public findAll(): Observable<Breastfeeding> {
    let url = this.breastfeedingUrl+"?size=999";

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .map(data => {return data['_embedded']});

  }

  public findById(id:string): Observable<Breastfeeding> {
    let url = this.breastfeedingUrl + "/" + id;
    let params = new HttpParams();
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .map((data: Breastfeeding) => {return data});


  }

  public updateBreastfeeding(breastfeedingData: Breastfeeding): Promise<any> {
    let url = this.breastfeedingUrl + "/" + breastfeedingData.id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.put(url, breastfeedingData,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();

  }

  public deleteBreastfeeding(id: string): Promise<any>{
    let url = this.breastfeedingUrl + "/" + id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.delete(url,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();


  }

  createBreastfeeding(breastfeeding: Breastfeeding): Promise<any> {

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());

    return this.http.post(this.breastfeedingUrl, breastfeeding, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .toPromise()

  }






}


