import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../category.service";
import {Category} from "../category";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {


  id: string;

  category: Category;


  constructor(private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.data.subscribe(
      data => {
        this.category = data['category'];
      }
    );


  }

  updateCategory(category: Category) {
    this.categoryService.updateCategory(category).then(exec => this.router.navigateByUrl('category'));

  }

  createCategory(category: Category) {
    this.categoryService.createCategory(category).then(exec => this.router.navigateByUrl('category'));

  }

  cancel() {
    this.router.navigateByUrl('category');
  }

}
