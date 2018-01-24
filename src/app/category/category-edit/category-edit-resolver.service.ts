import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {CategoryService} from "../category.service";
import {Category} from "../category";

@Injectable()
export class CategoryEditResolverService implements Resolve<any> {


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Category | Observable<Category> | Promise<Category> {

    if(route.params.id > 0) {
      return this.categoryService.findById(route.params.id);
    }
    else {
      return new Category();
    }

  }




  constructor(private categoryService: CategoryService) { }

}
