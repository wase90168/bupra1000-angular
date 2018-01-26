import {Component, OnInit} from '@angular/core';

import {State} from "../state";
import {ActivatedRoute, Router} from "@angular/router";
import {StateService} from "../state.service";

@Component({
  selector: 'app-state-edit',
  templateUrl: './state-edit.component.html',
  styleUrls: ['./state-edit.component.css']
})
export class StateEditComponent implements OnInit {

  id: string;

  state: State;


  constructor(private stateService: StateService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.data.subscribe(
      data => {
        this.state = data['state'];
      }
    );


  }

  updateState(state: State) {
    this.stateService.updateState(state).then(exec => this.router.navigateByUrl('state'));

  }

  createState(state: State) {

    this.stateService.createState(state).then(exec => this.router.navigateByUrl('state'));

  }

  cancel(){
    this.router.navigateByUrl('state');
  }


}
