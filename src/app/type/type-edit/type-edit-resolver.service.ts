import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {TypeService} from "../../type/type.service";
import {Observable} from "rxjs/Observable";
import {Type} from "../../type/type";

@Injectable()
export class TypeEditResolverService {

  constructor(private typeService: TypeService) { }



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Type | Observable<Type> | Promise<Type> {

    if(route.params.id > 0) {
      return this.typeService.findById(route.params.id);
    }
    else {
      return new Type();
    }

  }

}
