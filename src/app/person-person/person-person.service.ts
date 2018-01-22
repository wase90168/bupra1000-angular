import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {UzerLoginService} from "../uzer/uzer-login.service";
import {Person_Person} from "./person-person";
import {AppService} from "../app.service";

@Injectable()
export class Person_PersonService {

  constructor(private uzerLoginService: UzerLoginService, private http: HttpClient, private appService: AppService) {
  }


  private person_personUrl: string = this.appService.getBaseURL() + "/person_Persons";
  private baseUrl: string = this.appService.getBaseURL();


  public findAll(): Observable<Person_Person> {
    let url = this.person_personUrl + "?projection=inlinePerson_Person&size=99999";

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .map(data => {
        return data['_embedded']
      });

  }



  public findById(id: string): Observable<Person_Person> {
    let url = this.person_personUrl + "/" + id + "?projection=inlinePerson_Person";
    let params = new HttpParams();
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this
      .http
      .get(url, {headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())})
      .map((data: Person_Person) => {
        return data
      });


  }

  public updatePerson_Person(person_person: Person_Person): Promise<any> {
    let url = this.baseUrl + '/updatePerson_Person' + "?" +
      "person_person=" + person_person.id + "&" +
      "baby=" + person_person.baby.id + "&" +
      "mother=" + person_person.mother.id + "&" +
      "breastfeeding=" + person_person.breastfeeding.id;


    console.log(url);

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this.http.put(url, person_person,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();

  }

  public createPerson_Person(person_person: Person_Person): Promise<any> {
    let url = this.baseUrl + '/createPerson_Person' + "?" +
      "baby=" + person_person.baby.id + "&" +
      "mother=" + person_person.mother.id + "&" +
      "breastfeeding=" + person_person.breastfeeding.id;


    console.log(url);

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());


    return this.http.post(url, person_person,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();

  }

  public deletePerson_person(id: string): Promise<any> {
    let url = this.person_personUrl + "/" + id;
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.uzerLoginService.authorizationHeader());
    return this.http.delete(url,{headers: new HttpHeaders().set('Authorization', this.uzerLoginService.authorizationHeader())}).toPromise();


  }




}


