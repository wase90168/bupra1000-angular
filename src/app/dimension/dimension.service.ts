import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {UzerLoginService} from "../uzer/uzer-login.service";
import {AppService} from "../app.service";
import {Dimension} from "./dimension";
import {Category} from "../category/category";

@Injectable()
export class DimensionService {

  constructor(private uzerLoginService: UzerLoginService, private http: HttpClient, private appService: AppService) { }


  private dimensionUrl: string = this.appService.getBaseURL() + "/dimensions";

  private  baseUrl: string = this.appService.getBaseURL();

  public findAll(): Observable<Dimension> {
    let url = this.dimensionUrl+"?projection=inlineDimension&size=99999";

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .map(data => {return data['_embedded']});

  }

  public findById(id:string): Observable<Dimension> {
    let url = this.dimensionUrl + "/" + id +"?projection=inlineDimension";
    let headers = new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers})
      .map((data: Dimension) => {return data});


  }

  public updateDimension(dimension: Dimension): Promise<any> {
    let url = this.baseUrl + "/updateDimension";
    let dimensionUrl2 = this.dimensionUrl +"/"+ dimension.id;
    let headers = new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader());
    let params = new HttpParams().set('name',dimension.name).set('dimension',dimension.dimension).set('description',dimension.description).set('category',dimension.category.id).set('id',dimension.id);

    return this.http.put(url, dimension,{headers:headers, params:params}).toPromise().then(exec => this.updateDimensionDimension(dimension));

  }

  updateDimensionDimension(dimension: Dimension): Promise<any> {
    let url = this.dimensionUrl +"/"+ dimension.id +"?projection=inlineDimension";
    let headers = new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader());

    console.log(dimension);
    return this.http.put(url,dimension,{headers}).toPromise();

  }

  public deleteDimension(id: string): Promise<any>{
    let url = this.dimensionUrl + "/" + id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.delete(url,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();


  }

  public createDimension(dimension: Dimension): Promise<any> {
    let url = this.baseUrl + "/createDimension";
    let headers = new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader());
    let params = new HttpParams().set('name',dimension.name).set('dimension',dimension.dimension).set('description',dimension.description).set('category',dimension.category.id);


    return this.http.post(url, dimension, {headers:headers, params:params})
      .toPromise()

  }

  public findAllByCategory(category: Category): Observable<Dimension> {
    let url = this.dimensionUrl + "/search/findAllByCategory_Id?projection=inlineDimension&category_id="+category.id;
    let headers = new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader());
    //let params = new HttpParams().set("category_id","1");

    return this
      .http
      .get(url,{headers})
      .map((data: Dimension) => {return data["_embedded"]});


  }






}


