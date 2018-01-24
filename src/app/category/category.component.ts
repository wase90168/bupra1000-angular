import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";
import {Value} from "../value/value";
import {Category} from "./category";
import {CategoryService} from "./category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public data: Observable<Category>;
  public message: string;

  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit() {

    this.getData();
  }


  getData() {
    this.categoryService.findAll().subscribe((datax: Category) => this.data = datax['categories']);

  }

  deleteEntry(id: string) {

    this.categoryService.deleteCategory(id).then((res: Response) => {

      this.ngOnInit();
    })

  }

  addCategory() {

    this.router.navigateByUrl("category-edit/0");

  }

  editCategory(id: string) {
    this.router.navigateByUrl("category-edit/" + id);
  }



}
