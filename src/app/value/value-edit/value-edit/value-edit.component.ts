import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ValueService} from '../../value.service';
import {ActivatedRoute} from '@angular/router';
import {Value} from '../../value';

@Component({
  selector: 'app-value-edit',
  templateUrl: './value-edit.component.html',
  styleUrls: ['./value-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ValueEditComponent implements OnInit {

  id: string;
  public data: any;

  value: Value;

  constructor(private valueService: ValueService, private route: ActivatedRoute) {

    route.params.subscribe(
      c => {
        this.id = c['id'];
        this.load(this.id);
      }
    )
  }

  ngOnInit() {

    this.data = this.route.snapshot.data;

  }

  load(id: string): void {
    this.value = this.valueService.findById(id)

  }

  save(){
    this.valueService.saveValue(this.value);
  }

}
