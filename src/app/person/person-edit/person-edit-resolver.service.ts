import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Person} from "../person";
import {Observable} from "rxjs/Observable";
import {PersonService} from "../person.service";

@Injectable()
export class PersonEditResolverService implements Resolve<any> {

  person: Person;


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Person | Observable<Person> | Promise<Person> {

    if(route.params.id > 0) {
      return this.personService.findById(route.params.id);
    }
    else {
      return this.person = new Person();
      }


  }







  constructor(private personService: PersonService) { }

}
