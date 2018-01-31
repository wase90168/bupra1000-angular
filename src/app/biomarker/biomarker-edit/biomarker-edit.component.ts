import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Biomarker} from '../biomarker';
import {BiomarkerService} from '../biomarker.service';
import {Observable} from 'rxjs/Observable';
import {Category} from '../../category/category';
import {CategoryService} from '../../category/category.service';

@Component({
  selector: 'app-biomarker-edit',
  templateUrl: './biomarker-edit.component.html',
  styleUrls: ['./biomarker-edit.component.css']
})
export class BiomarkerEditComponent implements OnInit {

  id: string;

  biomarker: Biomarker;

  categories: Observable<Category>;


  constructor(private biomarkerService: BiomarkerService, private router: Router, private route: ActivatedRoute, private categoryService: CategoryService) {
  }

  ngOnInit() {

    this.route.data.subscribe(
      data => {
        this.biomarker = data['biomarker'];
      }
    );

    this.getCategories();


  }

  updateBiomarker(biomarker: Biomarker) {
    this.biomarkerService.updateBiomarker(biomarker).then(exec => this.router.navigateByUrl('biomarker'));

  }

  createBiomarker(biomarker: Biomarker) {
    this.biomarkerService.createBiomarker(biomarker).then(exec => this.router.navigateByUrl('biomarker'));

  }

  cancel() {
    this.router.navigateByUrl('biomarker');
  }

  getCategories() {
    this.categoryService.findAll().subscribe((categories) => this.categories = categories['categories']);

  }

}
