import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";
import {Source} from "./source";
import {SourceService} from "./source.service";

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  public data: Observable<Source>;
  public message: string;

  constructor(private route: ActivatedRoute, private router: Router, private sourceService: SourceService) {
  }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.sourceService.findAll().subscribe((datax: Source) => this.data = datax['sources']);

  }

  deleteEntry(id: string) {

    this.sourceService.deleteSource(id).then((res: Response) => {

      this.ngOnInit();
    })
  }

  addSource() {
    this.router.navigateByUrl("source-edit/0");
  }

  editSource(id: string) {
    this.router.navigateByUrl("source-edit/" + id);
  }

}
