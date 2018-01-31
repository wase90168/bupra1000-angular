import {Component, OnInit} from '@angular/core';
import {AddValueFlowService} from "../add-value-flow.service";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {BiomarkerService} from "../../biomarker/biomarker.service";
import {CategoryService} from "../../category/category.service";
import {Category} from "../../category/category";
import {Biomarker} from "../../biomarker/biomarker";

@Component({
  selector: 'app-add-value-flow-biomarker',
  templateUrl: './add-value-flow-biomarker.component.html',
  styleUrls: ['./add-value-flow-biomarker.component.css']
})
export class AddValueFlowBiomarkerComponent implements OnInit {

  private biomarker: Biomarker;
  private category: Category;


  private categories: Observable<Category>;
  private biomarkers: Observable<Biomarker>;

  constructor(private biomarkerService: BiomarkerService, private categoryService: CategoryService, private addValueFlowService: AddValueFlowService, private router: Router) {
  }

  ngOnInit() {
    this.getCategories()

    this.biomarker = this.addValueFlowService._biomarker;
    this.category = this.addValueFlowService._category;

    if (this.category != null) {
      this.getBiomarkers();
    }

  }


  getBiomarkers() {

    this.biomarkerService.findAllByCategory(this.category).subscribe((biomarkers) => this.biomarkers = biomarkers['biomarkers']);

  }

  getCategories() {
    this.categoryService.findAll().subscribe((categories) => this.categories = categories['categories']);

  }


  continue() {
    this.addValueFlowService._biomarker = this.biomarker;
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

  saveBiomarker(){
    this.addValueFlowService._biomarker = this.biomarker;


  }



}



