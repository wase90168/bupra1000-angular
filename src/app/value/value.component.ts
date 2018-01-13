import { Component, OnInit } from '@angular/core';
import {Value} from './value';
import {ValueService} from './value.service';
import {Observable} from 'rxjs/Observable';
import {delay} from 'q';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  public selectedValue : Value;
  public data: any;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(
      data => {
        this.data = data['valuesToken'];
      }
    );
  }

  ngOnInit() {






  }

  select(value: Value): void {
    this.selectedValue = value;
  }

  addValue(){
    return "hallo";
  }



}






