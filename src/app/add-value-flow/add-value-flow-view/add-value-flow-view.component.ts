import {Component, OnInit} from '@angular/core';
import {Category} from "../../category/category";
import {Dimension} from "../../dimension/dimension";
import {Source} from "../../source/source";
import {MR} from "../../mr/mr";
import {State} from "../../state/state";
import {AddValueFlowService} from "../add-value-flow.service";
import {Router} from "@angular/router";
import {ValueService} from "../../value/value.service";
import {Value} from "../../value/value";

@Component({
  selector: 'app-add-value-flow-view',
  templateUrl: './add-value-flow-view.component.html',
  styleUrls: ['./add-value-flow-view.component.css']
})
export class AddValueFlowViewComponent implements OnInit {

  suffix: string;
  prefix: string;

  mr: MR;

  category: Category;
  dimension: Dimension;

  source: Source;

  value: string;
  state: State;

  value1: Value;

  constructor(private valueService: ValueService, private addValueFlowService: AddValueFlowService, private router: Router) {
  }

  ngOnInit() {

    this.prefix = this.addValueFlowService._prefix;
    this.suffix = this.addValueFlowService._suffix;
    this.mr = this.addValueFlowService._mr;
    this.category = this.addValueFlowService._category;
    this.dimension = this.addValueFlowService._dimension;
    this.source = this.addValueFlowService._source;
    this.value = this.addValueFlowService._value;
    this.state = this.addValueFlowService._state;

  }

  back() {
    this.router.navigateByUrl('add-value-flow/value')
  }

  cancel() {
    this.addValueFlowService.clearAll()
    this.router.navigateByUrl('home');
  }

  save() {
    this.value1 = new Value();
    this.value1.value = this.addValueFlowService._value;
    this.value1.dimension = this.addValueFlowService._dimension;
    this.value1.mr = this.addValueFlowService._mr;
    this.value1.state = this.addValueFlowService._state;
    this.value1.source = this.addValueFlowService._source;
    //this.valueService.createValueFlow(this.value, this.suffix, this.prefix, this.mr, this.dimension, this.source, this.state).then(exec => this.router.navigateByUrl('value'));
    this.valueService.createValueFlow2(this.value1, this.suffix, this.prefix).then(exec => this.router.navigateByUrl('value'));
    this.addValueFlowService.clearAll();

  }


}
