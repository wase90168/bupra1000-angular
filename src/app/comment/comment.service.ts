import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UzerLoginService} from '../uzer/uzer-login.service';
import {Comment} from '../comment/comment';
import {AppService} from '../app.service';

@Injectable()
export class CommentService {

  private commentUrl: string = this.appService.getBaseURL() + '/comments';

  constructor(private uzerLoginService: UzerLoginService, private http: HttpClient, private appService: AppService) {
  }

  public findAll(): Observable<Comment> {
    let url = this.commentUrl;

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

  public findById(id: string): Observable<Comment> {
    let url = this.commentUrl + '/' + id;
    let params = new HttpParams();
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .map((data: Comment) => {
        return data;
      });


  }

  public updateComment(commentData: Comment): Promise<any> {
    let url = this.commentUrl + '/' + commentData.id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.put(url, commentData, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();

  }

  public deleteComment(id: string): Promise<any> {
    let url = this.commentUrl + '/' + id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.delete(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();


  }

  createComment(comment: Comment): Promise<any> {

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());

    return this.http.post(this.commentUrl, comment, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .toPromise();

  }


}


