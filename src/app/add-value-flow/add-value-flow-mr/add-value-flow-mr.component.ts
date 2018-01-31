import { Component, OnInit } from '@angular/core';
import {AddValueFlowService} from "../add-value-flow.service";
import {Observable} from "rxjs/Observable";
import {PersonService} from "../../person/person.service";
import {Person} from "../../person/person";
import {Router} from "@angular/router";
import {MrService} from "../../mr/mr.service";
import {MR} from "../../mr/mr";

@Component({
  selector: 'app-add-value-flow-mr',
  templateUrl: './add-value-flow-mr.component.html',
  styleUrls: ['./add-value-flow-mr.component.css']
})
export class AddValueFlowMrComponent implements OnInit {
  private mr: MR;


  private mrs: Observable<MR>;

  constructor(private mrService: MrService, private addValueFlowService: AddValueFlowService, private router:Router) { }

  ngOnInit() {
    this.getMrs()

    this.mr = this.addValueFlowService._mr;

  }


  getMrs(){
    this.mrService.findAll().subscribe((mrs) => this.mrs = mrs['mRs']);

  }



  continue(){
    this.addValueFlowService._mr = this.mr;
    this.router.navigateByUrl("/add-value-flow/biomarker");

  }


  back(){
    this.router.navigateByUrl('add-value-flow/person')
  }

  cancel(){
    this.addValueFlowService.clearAll()
    this.router.navigateByUrl('home');
  }


}
