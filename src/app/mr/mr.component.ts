import { Component, OnInit } from '@angular/core';
import {MrService} from "../mr/mr.service";
import {Observable} from "rxjs/Observable";
import {MR} from "../mr/mr";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-mr',
  templateUrl: './mr.component.html',
  styleUrls: ['./mr.component.css']
})
export class MrComponent implements OnInit {

  public data: Observable<MR>;
  public message: string;

  constructor(private route: ActivatedRoute, private router: Router, private mrService: MrService) {
  }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.mrService.findAll().subscribe((datax: MR) => this.data = datax['mRs']);

  }

  deleteEntry(id: string) {

    this.mrService.deleteMr(id).then((res: Response) => {

      this.ngOnInit();
    })
  }

  addMr() {
    this.router.navigateByUrl("mr-edit/0");
  }

  editMr(id: string) {
    this.router.navigateByUrl("mr-edit/" + id);
  }
}
