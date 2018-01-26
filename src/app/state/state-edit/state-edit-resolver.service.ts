import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {StateService} from "../state.service";
import {State} from "../state";

@Injectable()
export class StateEditResolverService {

  constructor(private typeService: StateService) { }



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): State | Observable<State> | Promise<State> {

    if(route.params.id > 0) {
      return this.typeService.findById(route.params.id);
    }
    else {
      return new State();
    }

  }

}
