import {Component, OnInit} from '@angular/core';

import {Source} from "../source";
import {ActivatedRoute, Router} from "@angular/router";
import {SourceService} from "../source.service";

@Component({
  selector: 'app-source-edit',
  templateUrl: './source-edit.component.html',
  styleUrls: ['./source-edit.component.css']
})
export class SourceEditComponent implements OnInit {

  id: string;

  source: Source;


  constructor(private sourceService: SourceService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.data.subscribe(
      data => {
        this.source = data['source'];
      }
    );


  }

  updateSource(source: Source) {
    this.sourceService.updateSource(source).then(exec => this.router.navigateByUrl('source'));

  }

  createSource(source: Source) {

    this.sourceService.createSource(source).then(exec => this.router.navigateByUrl('source'));

  }

  cancel(){
    this.router.navigateByUrl('source');
  }


}
