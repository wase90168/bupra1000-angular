import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Value} from './value';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ValueService} from './value.service';
import {ProviderOverride} from '@angular/core/src/view';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit, OnDestroy {

  public selectedValue : Value;
  public data: Observable<Value>;
  public message: string;


  constructor(private route: ActivatedRoute, private router: Router,  private valueService: ValueService) {
  }

  ngOnInit()
  {
    this.getData();
  }

  ngOnDestroy()
  {




  }

  select(value: Value): void
  {
    this.selectedValue = value;
  }

  getData()
  {
    this.valueService.findAll().subscribe( (data) => this.data = data['values']);
    console.log(this.data);

  }

  addValue()
  {
    return "hallo";
  }

  deleteEntry(id: string){

      this.valueService.deleteValue(id).then((res: Response) => {

        this.ngOnInit();
      })
    //this.valueService.findAll()
      //this.getData();





  }

  editValue(){
    this.router.navigateByUrl("value-edit/" + this.selectedValue.id);
  }





}






