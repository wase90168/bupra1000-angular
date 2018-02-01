import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ValueService} from '../../value.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Value} from '../../value';
import {Observable} from 'rxjs/Observable';
import {Person} from '../../../person/person';
import {PersonService} from '../../../person/person.service';
import {State} from '../../../state/state';
import {MR} from '../../../mr/mr';
import {Source} from '../../../source/source';
import {Biomarker} from '../../../biomarker/biomarker';
import {StateService} from '../../../state/state.service';
import {MrService} from '../../../mr/mr.service';
import {SourceService} from '../../../source/source.service';
import {BiomarkerService} from '../../../biomarker/biomarker.service';
import {DimensionService} from '../../../dimension/dimension.service';
import {Dimension} from '../../../dimension/dimension';
import {CommentService} from '../../../comment/comment.service';
import {Comment} from '../../../comment/comment';

@Component({
  selector: 'app-value-edit',
  templateUrl: './value-edit.component.html',
  styleUrls: ['./value-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ValueEditComponent implements OnInit {

  id: string;

  value: Value;

  persons: Observable<Person>;

  states: Observable<State>;

  mrs: Observable<MR>;

  sources: Observable<Source>;

  biomarkers: Observable<Biomarker>;

  dimensions: Observable<Dimension>;

  comment1: Comment;





  constructor(private valueService: ValueService, private route: ActivatedRoute, private router: Router, private personService: PersonService,
              private stateService: StateService, private mrService: MrService, private sourceService: SourceService,
              private biomarkerService: BiomarkerService, private dimensionService: DimensionService, private commentService: CommentService/*, private commentService: CommentService*/) {


  }

  ngOnInit() {

    this.route.data.subscribe(
      data => {
        this.value = data['value'];
      }
    );
    this.getPersons();
    this.getSources();
    this.getMrs();
    this.getStates();
    this.getBiomarkers();
    this.getDimension();
    if (this.value.comment == null) {
      this.comment1 = new Comment();
    }
    else {
      this.comment1 = this.value.comment;
    }



    //this.load(this.route.snapshot.params['id'])

    //this.data = this.route.snapshot.data;




  }

  load(id: string): void {
    this.valueService.findById(id).subscribe((value: Value) => this.value = value);

  }



  updateValue(value: Value){
    this.valueService.updateValue(value).then(exec => this.router.navigateByUrl('value'));
    console.log(value);


  }

  createValue(value: Value) {
    this.value.comment = this.comment1;
    this.valueService.createValue(value).then(exec => this.router.navigateByUrl('value'));


  }

  getValue(id): Observable<Value> {
   return  this.valueService.findById(id);
  }

  getPersons() {
    this.personService.findAll().subscribe((persons) => this.persons = persons['persons']);

  }

  getStates() {
    this.stateService.findAll().subscribe((states) => this.states = states['states']);

  }

  getMrs() {
    this.mrService.findAll().subscribe((mrs) => this.mrs = mrs['mRs']);

  }

  getSources() {
    this.sourceService.findAll().subscribe((sources) => this.sources = sources['sources']);

  }

  getBiomarkers() {
    this.biomarkerService.findAll().subscribe((biomarkers) => this.biomarkers = biomarkers['biomarkers']);

  }

  getDimension() {
    this.dimensionService.findAll().subscribe((dimensions) => this.dimensions = dimensions['dimensions']);

  }

  cancel() {
    this.router.navigateByUrl('value');
  }

}

