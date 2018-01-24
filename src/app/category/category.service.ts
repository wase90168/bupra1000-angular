import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {UzerLoginService} from "../uzer/uzer-login.service";
import {Category} from "../category/category";
import {AppService} from "../app.service";

@Injectable()
export class CategoryService {

  constructor(private uzerLoginService: UzerLoginService, private http: HttpClient, private appService: AppService) { }


  private categoryUrl: string = this.appService.getBaseURL() + "/categories";


  public findAll(): Observable<Category> {
    let url = this.categoryUrl;

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .map(data => {return data['_embedded']});

  }

  public findById(id:string): Observable<Category> {
    let url = this.categoryUrl + "/" + id +"?projection=inlineCategory";
    let params = new HttpParams();
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .map((data: Category) => {return data});


  }

  public updateCategory(categoryData: Category): Promise<any> {
    let url = this.categoryUrl + "/" + categoryData.id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.put(url, categoryData,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();

  }

  public deleteCategory(id: string): Promise<any>{
    let url = this.categoryUrl + "/" + id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.delete(url,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();


  }

  createCategory(category: Category): Promise<any> {

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());

    return this.http.post(this.categoryUrl, category, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .toPromise()

  }






}


