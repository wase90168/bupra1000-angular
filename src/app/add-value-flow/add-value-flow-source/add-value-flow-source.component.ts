import { Component, OnInit } from '@angular/core';
import {AddValueFlowService} from "../add-value-flow.service";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {Source} from "../../source/source";
import {SourceService} from "../../source/source.service";

@Component({
  selector: 'app-add-value-flow-source',
  templateUrl: './add-value-flow-source.component.html',
  styleUrls: ['./add-value-flow-source.component.css']
})
export class AddValueFlowSourceComponent implements OnInit {
  private source: Source;


  private sources: Observable<Source>;

  constructor(private sourceService: SourceService, private addValueFlowService: AddValueFlowService, private router:Router) { }

  ngOnInit() {
    this.getSources()

    this.source = this.addValueFlowService._source;

  }


  getSources(){
    this.sourceService.findAll().subscribe((sources) => this.sources = sources['sources']);

  }



  continue(){
    this.addValueFlowService._source = this.source;
    this.router.navigateByUrl("/add-value-flow/value");

  }


  back(){
    this.router.navigateByUrl('add-value-flow/dimension')
  }

  cancel(){
    this.addValueFlowService.clearAll()
    this.router.navigateByUrl('home');
  }

  saveSource(){
    this.addValueFlowService._source = this.source;

  }
}
