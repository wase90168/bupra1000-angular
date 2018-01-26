import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";
import {State} from "./state";
import {StateService} from "./state.service";

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  public data: Observable<State>;
  public message: string;

  constructor(private route: ActivatedRoute, private router: Router, private stateService: StateService) {
  }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.stateService.findAll().subscribe((datax: State) => this.data = datax['states']);

  }

  deleteEntry(id: string) {

    this.stateService.deleteState(id).then((res: Response) => {

      this.ngOnInit();
    })
  }

  addState() {
    this.router.navigateByUrl("state-edit/0");
  }

  editState(id: string) {
    this.router.navigateByUrl("state-edit/" + id);
  }

}
