import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {SourceService} from "../source.service";
import {Source} from "../source";

@Injectable()
export class SourceEditResolverService {

  constructor(private typeService: SourceService) { }



  resolve(route: ActivatedRouteSnapshot, source: RouterStateSnapshot): Source | Observable<Source> | Promise<Source> {

    if(route.params.id > 0) {
      return this.typeService.findById(route.params.id);
    }
    else {
      return new Source();
    }

  }

}
