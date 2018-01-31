import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Person} from "../../person/person";
import {PersonService} from "../../person/person.service";
import {AddValueFlowService} from "../add-value-flow.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-value-flow-person',
  templateUrl: './add-value-flow-person.component.html',
  styleUrls: ['./add-value-flow-person.component.css']
})
export class AddValueFlowPersonComponent implements OnInit {

  private suffix: string;
  private prefix: string;

  private  input: boolean = false;

  private persons: Observable<Person>;

  constructor(private personService: PersonService, private addValueFlowService: AddValueFlowService, private router:Router) { }

  ngOnInit() {
    this.getPersons()

    this.suffix = this.addValueFlowService._suffix;
    this.prefix = this.addValueFlowService._prefix;

  }


  getPersons(){
    this.personService.findAllMothers().subscribe((persons) => this.persons = persons['persons']);

  }

  addSuffix(){
    this.personService.createSuffix().then(exec => this.ngOnInit);
  }

  continue(){
    this.addValueFlowService._suffix = this.suffix;
    this.addValueFlowService._prefix = this.prefix;
    this.router.navigateByUrl("/add-value-flow/mr");

  }

  switchToInput(){
    this.input = true;
    this.ngOnInit();
  }

  switchToDropdown(){
    this.input = false;
    this.ngOnInit();
  }

  cancel(){
    this.addValueFlowService.clearAll()
    this.router.navigateByUrl('home');
  }


}



