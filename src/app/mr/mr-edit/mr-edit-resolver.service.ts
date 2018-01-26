import {Injectable} from "@angular/core";
import {MrService} from "../mr.service";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {MR} from "../mr";
import {Observable} from "rxjs/Observable";


@Injectable()
export class MrEditResolverService {

  constructor(private mrService: MrService) { }



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MR | Observable<MR> | Promise<MR> {

    if(route.params.id > 0) {
      return this.mrService.findById(route.params.id);
    }
    else {
      return new MR();
    }

  }

}
