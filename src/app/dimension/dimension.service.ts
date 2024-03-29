import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UzerLoginService} from '../uzer/uzer-login.service';
import {Dimension} from '../dimension/dimension';
import {AppService} from '../app.service';

@Injectable()
export class DimensionService {

  private dimensionUrl: string = this.appService.getBaseURL() + '/dimensions';

  constructor(private uzerLoginService: UzerLoginService, private http: HttpClient, private appService: AppService) {
  }

  public findAll(): Observable<Dimension> {
    let url = this.dimensionUrl;

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

  public findById(id: string): Observable<Dimension> {
    let url = this.dimensionUrl + '/' + id;
    let params = new HttpParams();
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .map((data: Dimension) => {
        return data;
      });


  }

  public updateDimension(dimensionData: Dimension): Promise<any> {
    let url = this.dimensionUrl + '/' + dimensionData.id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.put(url, dimensionData, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();

  }

  public deleteDimension(id: string): Promise<any> {
    let url = this.dimensionUrl + '/' + id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.delete(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();


  }

  createDimension(dimension: Dimension): Promise<any> {

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());

    return this.http.post(this.dimensionUrl, dimension, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .toPromise();

  }


}


