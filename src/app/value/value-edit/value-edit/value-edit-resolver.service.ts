import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ValueService} from '../../value.service';
import {Value} from '../../value';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ValueEditResolverService implements  Resolve<any>
{



  constructor(private valueService: ValueService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Value> | Promise<Value> | Value {

    if(route.params.id > 0) {
      return this.valueService.findById(route.params.id);
    }
    else {
      return new Value();
    }

  }

}
