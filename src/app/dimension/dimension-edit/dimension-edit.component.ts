import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Dimension} from "../dimension";
import {DimensionService} from "../dimension.service";
import {Observable} from "rxjs/Observable";
import {Category} from "../../category/category";
import {CategoryService} from "../../category/category.service";

@Component({
  selector: 'app-dimension-edit',
  templateUrl: './dimension-edit.component.html',
  styleUrls: ['./dimension-edit.component.css']
})
export class DimensionEditComponent implements OnInit {

  id: string;

  dimension: Dimension;

  categories: Observable<Category>;



  constructor(private dimensionService: DimensionService, private router: Router, private route: ActivatedRoute, private categoryService: CategoryService) {
  }

  ngOnInit() {

    this.route.data.subscribe(
      data => {
        this.dimension = data['dimension'];
      }
    );

    this.getCategories()


  }

  updateDimension(dimension: Dimension) {
    this.dimensionService.updateDimension(dimension).then(exec => this.router.navigateByUrl('dimension'));

  }

  createDimension(dimension: Dimension) {
    this.dimensionService.createDimension(dimension).then(exec => this.router.navigateByUrl('dimension'));

  }

  cancel() {
    this.router.navigateByUrl('dimension');
  }

  getCategories() {
    this.categoryService.findAll().subscribe((categories) => this.categories = categories['categories']);

  }

}
