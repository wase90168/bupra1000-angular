import {Component, OnInit} from '@angular/core';
import {AddValueFlowService} from "../add-value-flow.service";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {DimensionService} from "../../dimension/dimension.service";
import {CategoryService} from "../../category/category.service";
import {Category} from "../../category/category";
import {Dimension} from "../../dimension/dimension";

@Component({
  selector: 'app-add-value-flow-dimension',
  templateUrl: './add-value-flow-dimension.component.html',
  styleUrls: ['./add-value-flow-dimension.component.css']
})
export class AddValueFlowDimensionComponent implements OnInit {

  private dimension: Dimension;
  private category: Category;


  private categories: Observable<Category>;
  private dimensions: Observable<Dimension>;

  constructor(private dimensionService: DimensionService, private categoryService: CategoryService, private addValueFlowService: AddValueFlowService, private router: Router) {
  }

  ngOnInit() {
    this.getCategories()

    this.dimension = this.addValueFlowService._dimension;
    this.category = this.addValueFlowService._category;

    if (this.category != null) {
      this.getDimensions();
    }

  }


  getDimensions() {

    this.dimensionService.findAllByCategory(this.category).subscribe((dimensions) => this.dimensions = dimensions['dimensions']);

  }

  getCategories() {
    this.categoryService.findAll().subscribe((categories) => this.categories = categories['categories']);

  }


  continue() {
    this.addValueFlowService._dimension = this.dimension;
    this.addValueFlowService._category = this.category;
    this.router.navigateByUrl("/add-value-flow/source");

  }


  back() {


    this.router.navigateByUrl('add-value-flow/mr')
  }

  cancel() {
    this.addValueFlowService.clearAll();
    this.router.navigateByUrl('home');
  }

  saveCategory(){
    this.addValueFlowService._category = this.category;


  }

  saveDimension(){
    this.addValueFlowService._dimension = this.dimension;


  }



}



