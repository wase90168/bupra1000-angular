import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ValueService} from '../../value.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Value} from '../../value';
import {Observable} from 'rxjs/Observable';
import {ValueComponent} from '../../value.component';

@Component({
  selector: 'app-value-edit',
  templateUrl: './value-edit.component.html',
  styleUrls: ['./value-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ValueEditComponent implements OnInit {

  id: string;

  value: Value;

  constructor(private valueService: ValueService, private route: ActivatedRoute, private router: Router) {


  }

  ngOnInit() {

    this.route.data.subscribe(
      data => {
        this.value = data['valuesToken'];
      }
    );

    //this.data = this.route.snapshot.data;

  }

  load(id: string): void {
    this.valueService.findById(id)

  }

  save(value: Value){
    this.valueService.updateValue(value);




    this.router.navigateByUrl("value");

  }

}

