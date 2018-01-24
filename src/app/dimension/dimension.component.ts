import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";
import {Dimension} from "./dimension";
import {DimensionService} from "./dimension.service";

@Component({
  selector: 'app-dimension',
  templateUrl: './dimension.component.html',
  styleUrls: ['./dimension.component.css']
})
export class DimensionComponent implements OnInit {

  public data: Observable<Dimension>;
  public message: string;

  constructor(private route: ActivatedRoute, private router: Router, private dimensionService: DimensionService) {
  }

  ngOnInit() {

    this.getData();
  }


  getData() {
    this.dimensionService.findAll().subscribe((datax: Dimension) => this.data = datax['dimensions']);

  }

  deleteEntry(id: string) {

    this.dimensionService.deleteDimension(id).then((res: Response) => {

      this.ngOnInit();
    })

  }

  addDimension() {

    this.router.navigateByUrl("dimension-edit/0");

  }

  editDimension(id: string) {
    this.router.navigateByUrl("dimension-edit/" + id);
  }


}
