import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonService} from "./person.service";
import {Person} from "./person";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {


  public data: Observable<Person>;
  public message: string;

  constructor(private route: ActivatedRoute, private router: Router, private personService: PersonService) {
  }

  ngOnInit() {

    this.getData();
  }


  getData() {
    this.personService.findAll().subscribe((datax: Person) => this.data = datax['persons']);

  }

  deleteEntry(id: string) {

    this.personService.deletePerson(id).then((res: Response) => {

      this.ngOnInit();
    })

  }

  addPerson() {

    this.router.navigateByUrl("person-edit/0");

  }

  editPerson(id: string) {
    this.router.navigateByUrl("person-edit/" + id);
  }


}
