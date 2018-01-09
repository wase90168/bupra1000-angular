import { Component, OnInit } from '@angular/core';
import {Value} from './value';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  public selectedValue : Value;

  constructor() { }

  ngOnInit() {
  }

}
