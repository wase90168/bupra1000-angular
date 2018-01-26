import { Component, OnInit } from '@angular/core';
import {TypeService} from "../type/type.service";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";
import {Type} from "../type/type";

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  public data: Observable<Type>;
  public message: string;

  constructor(private route: ActivatedRoute, private router: Router, private typeService: TypeService) {
  }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.typeService.findAll().subscribe((datax: Type) => this.data = datax['types']);

  }

  deleteEntry(id: string) {

    this.typeService.deleteType(id).then((res: Response) => {

      this.ngOnInit();
    })
  }

  addType() {
    this.router.navigateByUrl("type-edit/0");
  }

  editType(id: string) {
    this.router.navigateByUrl("type-edit/" + id);
  }

}
