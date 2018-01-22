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
export class ValueComponent implements OnInit {

  public data: Observable<Value>;
  public message: string;


  constructor(private route: ActivatedRoute, private router: Router,  private valueService: ValueService) {

  }

  ngOnInit()
  {
    this.getData();

    console.log(this.getData());
  }




  getData()
  {
    this.valueService.findAll().subscribe( (datax: Value) => this.data = datax['values']);

  }


  addValue()
  {

    this.router.navigateByUrl("value-edit/0");

  }




  deleteEntry(id: string){

      this.valueService.deleteValue(id).then((res: Response) => {

        this.ngOnInit();
      })

  }

  editValue(id: string){
    this.router.navigateByUrl("value-edit/" + id);
  }





}






