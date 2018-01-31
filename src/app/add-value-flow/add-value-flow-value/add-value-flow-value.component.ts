import { Component, OnInit } from '@angular/core';
import {AddValueFlowService} from "../add-value-flow.service";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {State} from "../../state/state";
import {StateService} from "../../state/state.service";

@Component({
  selector: 'app-add-value-flow-value',
  templateUrl: './add-value-flow-value.component.html',
  styleUrls: ['./add-value-flow-value.component.css']
})
export class AddValueFlowValueComponent implements OnInit {

  private state: State;
  private value: string;


  private states: Observable<State>;

  constructor(private stateService: StateService, private addValueFlowService: AddValueFlowService, private router:Router) { }

  ngOnInit() {
    this.getStates();

    this.state = this.addValueFlowService._state;
    this.value = this.addValueFlowService._value;

  }


  getStates(){
    this.stateService.findAll().subscribe((states) => this.states = states['states']);

  }



  continue(){
    this.addValueFlowService._value = this.value;
    this.addValueFlowService._state = this.state;
    this.router.navigateByUrl("/add-value-flow/view");

  }


  back(){
    this.router.navigateByUrl('add-value-flow/source')
  }

  cancel(){
    this.addValueFlowService.clearAll()
    this.router.navigateByUrl('home');
  }

  saveState(){
    this.addValueFlowService._state = this.state;

  }

  saveValue(){
    this.addValueFlowService._value = this.value;
    console.log(this.value);


  }
}
