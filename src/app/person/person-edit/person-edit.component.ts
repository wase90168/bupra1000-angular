import {Component, OnInit} from '@angular/core';

import {Person} from "../person";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonService} from "../person.service";
import {TypeService} from "../../type/type.service";
import {Observable} from "rxjs/Observable";
import {Type} from "../../type/type";

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  id: string;

  person: Person;

  types: Observable<Type>;


  constructor(private personService: PersonService, private router: Router, private route: ActivatedRoute, private typeService: TypeService) {
  }

  ngOnInit() {

    this.route.data.subscribe(
      data => {
        this.person = data['person'];
      }
    );

    this.getTypes();


  }

  updatePerson(person: Person) {
    this.personService.updatePerson(person).then(exec => this.router.navigateByUrl('person'));

  }

  createPerson(person: Person) {

    this.personService.createPerson(person).then(exec => this.router.navigateByUrl('person'));

  }

  cancel(){
    this.router.navigateByUrl('person');
  }

  getTypes() {
    this.typeService.findAll().subscribe((types) => this.types = types['types']);

  }


}
