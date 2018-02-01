import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {DimensionService} from '../dimension.service';
import {Dimension} from '../dimension';

@Injectable()
export class DimensionEditResolverService {

  constructor(private dimensionService: DimensionService) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Dimension | Observable<Dimension> | Promise<Dimension> {

    if (route.params.id > 0) {
      return this.dimensionService.findById(route.params.id);
    }
    else {
      return new Dimension();
    }

  }

}
