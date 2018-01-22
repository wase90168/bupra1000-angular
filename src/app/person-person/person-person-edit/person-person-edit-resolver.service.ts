import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Value} from "../../value/value";
import {ValueService} from "../../value/value.service";
import {Observable} from "rxjs/Observable";
import {Person_Person} from "../person-person";
import {Person_PersonService} from "../person-person.service";

@Injectable()
export class PersonPersonEditResolverService implements Resolve<any>{

  constructor(private person_PersonService: Person_PersonService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person_Person> | Promise<Person_Person> | Person_Person {

    if(route.params.id > 0) {
      return this.person_PersonService.findById(route.params.id);
    }
    else {
      return new Person_Person();
    }

  }

}
