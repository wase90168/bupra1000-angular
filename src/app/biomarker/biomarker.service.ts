import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UzerLoginService} from '../uzer/uzer-login.service';
import {AppService} from '../app.service';
import {Biomarker} from './biomarker';
import {Category} from '../category/category';

@Injectable()
export class BiomarkerService {

  private biomarkerUrl: string = this.appService.getBaseURL() + '/biomarkers';
  private baseUrl: string = this.appService.getBaseURL();

  constructor(private uzerLoginService: UzerLoginService, private http: HttpClient, private appService: AppService) {
  }

  public findAll(): Observable<Biomarker> {
    let url = this.biomarkerUrl + '?projection=inlineBiomarker&size=99999';

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .map(data => {
        return data['_embedded'];
      });

  }

  public findById(id: string): Observable<Biomarker> {
    let url = this.biomarkerUrl + '/' + id + '?projection=inlineBiomarker';
    let headers = new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers})
      .map((data: Biomarker) => {
        return data;
      });


  }

  public updateBiomarker(biomarker: Biomarker): Promise<any> {
    let url = this.baseUrl + '/updateBiomarker';
    let biomarkerUrl2 = this.biomarkerUrl + '/' + biomarker.id;
    let headers = new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader());
    let params = new HttpParams().set('name', biomarker.name).set('biomarker', biomarker.biomarker).set('description', biomarker.description).set('category', biomarker.category.id).set('id', biomarker.id);

    return this.http.put(url, biomarker, {
      headers: headers,
      params: params
    }).toPromise().then(exec => this.updateBiomarkerBiomarker(biomarker));

  }

  updateBiomarkerBiomarker(biomarker: Biomarker): Promise<any> {
    let url = this.biomarkerUrl + '/' + biomarker.id + '?projection=inlineBiomarker';
    let headers = new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader());

    console.log(biomarker);
    return this.http.put(url, biomarker, {headers}).toPromise();

  }

  public deleteBiomarker(id: string): Promise<any> {
    let url = this.biomarkerUrl + '/' + id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.delete(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();


  }

  public createBiomarker(biomarker: Biomarker): Promise<any> {
    let url = this.baseUrl + '/createBiomarker';
    let headers = new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader());
    let params = new HttpParams().set('name', biomarker.name).set('biomarker', biomarker.biomarker).set('description', biomarker.description).set('category', biomarker.category.id);


    return this.http.post(url, biomarker, {headers: headers, params: params})
      .toPromise();

  }

  public findAllByCategory(category: Category): Observable<Biomarker> {
    let url = this.biomarkerUrl + '/search/findAllByCategory_Id?projection=inlineBiomarker&category_id=' + category.id;
    let headers = new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader());
    //let params = new HttpParams().set("category_id","1");

    return this
      .http
      .get(url, {headers})
      .map((data: Biomarker) => {
        return data['_embedded'];
      });


  }


}


