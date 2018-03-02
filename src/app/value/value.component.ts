import {Component, OnInit} from '@angular/core';
import {Value} from './value';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ValueService} from './value.service';
import {UzerLoginService} from "../uzer/uzer-login.service";


@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css'],

})
export class ValueComponent implements OnInit {

  public data: Observable<Value>;
  public message: string;

  admin:boolean;



  constructor(private  uzerLoginService:UzerLoginService,
    private route: ActivatedRoute, private router: Router,  private valueService: ValueService) {

  }

  ngOnInit()
  {
    this.getData();

    console.log(this.getData());

    //this.pdfMaker();

    if(this.uzerLoginService._storage.getItem("admin") == "true")
    {
      this.admin = true;

    }
    else {
      this.admin = false;
    }
    return this.admin;


  }




  getData()
  {
    this.valueService.findAll().subscribe( (datax: Value) => this.data = datax['values']);

  }


  addValue()
  {

    if(this.admin == true)
    {
      this.router.navigateByUrl("value-edit/0");

    }
    else{
      this.router.navigateByUrl("add-value-flow/person")
    }


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






