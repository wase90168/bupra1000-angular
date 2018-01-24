import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Person_Person} from "./person-person";
import {Person_PersonService} from "./person-person.service";
import {delay} from "q";

@Component({
  selector: 'app-person-person',
  templateUrl: './person-person.component.html',
  styleUrls: ['./person-person.component.css']
})
export class PersonPersonComponent implements OnInit {

  public selectedValue;
  public data: Observable<Person_Person>;
  public message: string;

  constructor(private route: ActivatedRoute, private router: Router, private person_PersonService: Person_PersonService) {

  }

  ngOnInit() {
    this.person_PersonService.findAll().subscribe((datax: Person_Person) => this.data = datax['person_Persons']);



    console.log("hallo")


  }


  deleteEntry(id: string) {

    this.person_PersonService.deletePerson_person(id).then((res: Response) => {

      this.ngOnInit();
    })

  }

  editPerson_Person(id: string) {
    this.router.navigateByUrl("person-person-edit/" + id);
  }

  addPerson_Person(id: string) {
    this.router.navigateByUrl("person-person-edit/0");

  }


}
