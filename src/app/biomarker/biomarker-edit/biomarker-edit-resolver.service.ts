import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {BiomarkerService} from '../biomarker.service';
import {Biomarker} from '../biomarker';

@Injectable()
export class BiomarkerEditResolverService {

  constructor(private biomarkerService: BiomarkerService) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Biomarker | Observable<Biomarker> | Promise<Biomarker> {

    if (route.params.id > 0) {
      return this.biomarkerService.findById(route.params.id);
    }
    else {
      return new Biomarker();
    }

  }

}
