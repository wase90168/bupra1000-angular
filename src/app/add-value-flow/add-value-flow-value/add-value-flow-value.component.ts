import {Component, OnInit} from '@angular/core';
import {AddValueFlowService} from '../add-value-flow.service';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {State} from '../../state/state';
import {StateService} from '../../state/state.service';
import {DimensionService} from '../../dimension/dimension.service';
import {Dimension} from '../../dimension/dimension';

@Component({
  selector: 'app-add-value-flow-value',
  templateUrl: './add-value-flow-value.component.html',
  styleUrls: ['./add-value-flow-value.component.css']
})
export class AddValueFlowValueComponent implements OnInit {

  private state: State;
  private value: string;


  private states: Observable<State>;
  comment: Comment;
  dimension: Dimension;
  private dimensions: Observable<Dimension>;

  constructor(private stateService: StateService, private addValueFlowService: AddValueFlowService, private router: Router,
              private dimensionService: DimensionService) {
  }

  ngOnInit() {
    this.getStates();
    this.getDimensions();

    this.state = this.addValueFlowService._state;
    this.value = this.addValueFlowService._value;

    if (this.addValueFlowService._comment == null) {
      this.comment = new Comment();
    }
    else {
      this.comment = this.addValueFlowService._comment;

    }

    this.dimension = this.addValueFlowService._dimension;

  }


  getStates() {
    this.stateService.findAll().subscribe((states) => this.states = states['states']);

  }

  getDimensions() {
    this.dimensionService.findAll().subscribe((dimensions) => this.dimensions = dimensions['dimensions']);

  }


  continue() {
    this.addValueFlowService._value = this.value;
    this.addValueFlowService._state = this.state;
    this.addValueFlowService._comment = this.comment;
    this.addValueFlowService._dimension = this.dimension;
    this.router.navigateByUrl('/add-value-flow/view');

  }


  back() {
    this.router.navigateByUrl('add-value-flow/source');
  }

  cancel() {
    this.addValueFlowService.clearAll();
    this.router.navigateByUrl('home');
  }

  saveState() {
    this.addValueFlowService._state = this.state;

  }

  saveValue() {
    this.addValueFlowService._value = this.value;
    console.log(this.value);


  }
}
