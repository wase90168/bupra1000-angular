import { Component, OnInit } from '@angular/core';
import {MrService} from "../../mr/mr.service";
import {MR} from "../../mr/mr";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-mr-edit',
  templateUrl: './mr-edit.component.html',
  styleUrls: ['./mr-edit.component.css']
})
export class MrEditComponent implements OnInit {

  id: string;

  mr: MR;




  constructor(private mrService: MrService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.data.subscribe(
      data => {
        this.mr = data['mr'];
      }
    );


  }

  updateMr(mr: MR) {
    this.mrService.updateMr(mr).then(exec => this.router.navigateByUrl('mr'));

  }

  createMr(mr: MR) {
    this.mrService.createMr(mr).then(exec => this.router.navigateByUrl('mr'));

  }

  cancel() {
    this.router.navigateByUrl('mr');
  }



}
