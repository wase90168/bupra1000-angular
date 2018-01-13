import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ValueService} from './value.service';
import {Value} from './value';
import {State} from '../state/state';

@Injectable()
export class ValueResolverService implements  Resolve<any>
  {


    values: Observable<Value>;

  constructor(private valueService: ValueService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Value> | Promise<Value> | Value {
    this.values = this.valueService.findAll()
    return this.values
  }

}
