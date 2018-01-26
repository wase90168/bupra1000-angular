import {Component, OnInit} from '@angular/core';
import {TypeService} from "../../type/type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Type} from "../../type/type";

@Component({
  selector: 'app-type-edit',
  templateUrl: './type-edit.component.html',
  styleUrls: ['./type-edit.component.css']
})
export class TypeEditComponent implements OnInit {

  id: string;

  type: Type;


  constructor(private typeService: TypeService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.data.subscribe(
      data => {
        this.type = data['type'];
      }
    );


  }

  updateType(type: Type) {
    this.typeService.updateType(type).then(exec => this.router.navigateByUrl('type'));

  }

  createType(type: Type) {
    this.typeService.createType(type).then(exec => this.router.navigateByUrl('type'));

  }

  cancel() {
    this.router.navigateByUrl('type');
  }


}
