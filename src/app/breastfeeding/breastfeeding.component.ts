import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Value} from "../value/value";
import {ActivatedRoute, Router} from "@angular/router";
import {ValueService} from "../value/value.service";
import {BreastfeedingService} from "./breastfeeding.service";
import {Breastfeeding} from "./breastfeeding";

@Component({
  selector: 'app-breastfeeding',
  templateUrl: './breastfeeding.component.html',
  styleUrls: ['./breastfeeding.component.css']
})
export class BreastfeedingComponent implements OnInit {


  public data: Observable<Value>;
  public message: string;

  constructor(private route: ActivatedRoute, private router: Router,  private breastfeedingService: BreastfeedingService) { }

  ngOnInit() {

    this.getData();
  }


  getData()
  {
    this.breastfeedingService.findAll().subscribe( (datax: Breastfeeding) => this.data = datax['breastfeedings']);

  }

  deleteEntry(id: string){

    this.breastfeedingService.deleteBreastfeeding(id).then((res: Response) => {

      this.ngOnInit();
    })

  }

  addBreastfeeding()
  {

    this.router.navigateByUrl("breastfeeding-edit/0");

  }

  editBreastfeeding(id: string){
    this.router.navigateByUrl("breastfeeding-edit/" + id);
  }



}
