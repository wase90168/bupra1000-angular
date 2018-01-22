import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Person_Person} from "./person-person";
import {Observable} from "rxjs/Observable";
import {Person_PersonService} from "./person-person.service";

@Injectable()
export class PersonPersonResolverService implements Resolve<any> {

  constructor(private person_PersonService: Person_PersonService) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person_Person> | Promise<Person_Person> | Person_Person {

    return this.person_PersonService.findAll();


  }

}
