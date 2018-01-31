import { Component, OnInit } from '@angular/core';
import {PersonService} from "../../person/person.service";
import {Biomarker} from "../../biomarker/biomarker";
import {ValueService} from "../../value/value.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {SourceService} from "../../source/source.service";
import {BiomarkerService} from "../../biomarker/biomarker.service";
import {Person} from "../../person/person";
import {State} from "../../state/state";
import {Value} from "../../value/value";
import {Source} from "../../source/source";
import {MR} from "../../mr/mr";
import {StateService} from "../../state/state.service";
import {MrService} from "../../mr/mr.service";
import {Breastfeeding} from "../../breastfeeding/breastfeeding";
import {BreastfeedingService} from "../../breastfeeding/breastfeeding.service";
import {Person_Person} from "../person-person";
import {Person_PersonService} from "../person-person.service";

@Component({
  selector: 'app-person-person-edit',
  templateUrl: './person-person-edit.component.html',
  styleUrls: ['./person-person-edit.component.css']
})
export class PersonPersonEditComponent implements OnInit {

  id: string;

  person_person: Person_Person;

  babies: Observable<Person>;

  mothers: Observable<Person>;

  breastfeedings: Observable<Breastfeeding>;



  constructor(private valueService: ValueService, private route: ActivatedRoute, private router: Router, private personService: PersonService,
              private breastfeedingService: BreastfeedingService, private person_personService: Person_PersonService ) {


  }

  ngOnInit() {

    this.route.data.subscribe(
      data => {
        this.person_person = data['person_person'];
      }
    );
    this.getBabies();
    this.getBreastfeeding();
    this.getMothers();

  }

  getBabies() {
    this.personService.findAllBabies().subscribe((persons) => this.babies = persons['persons']);

  }

  getMothers() {
    this.personService.findAllMothers().subscribe((persons) => this.mothers = persons['persons']);

  }

  getBreastfeeding() {
    this.breastfeedingService.findAll().subscribe((breastfeedings) => this.breastfeedings = breastfeedings['breastfeedings']);

  }

  cancel(){
    this.router.navigateByUrl('person-person');
  }

  updatePerson_Person(person_person: Person_Person){

    this.person_personService.updatePerson_Person(person_person).then(exec => this.router.navigateByUrl('person-person'));
    console.log(person_person);


  }

  createPerson_Person(person_person: Person_Person){
    this.person_personService.createPerson_Person(person_person).then(exec => this.router.navigateByUrl('person-person'));

  }

}
