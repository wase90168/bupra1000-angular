import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Breastfeeding} from "../breastfeeding";
import {Observable} from "rxjs/Observable";
import {BreastfeedingService} from "../breastfeeding.service";

@Injectable()
export class BreastfeedingEditResolverService implements Resolve<any> {


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Breastfeeding | Observable<Breastfeeding> | Promise<Breastfeeding> {

    if(route.params.id > 0) {
      return this.breastfeedingService.findById(route.params.id);
    }
    else {
      return new Breastfeeding();
    }

  }




  constructor(private breastfeedingService: BreastfeedingService) { }

}
