import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import {UzerLoginService} from './uzer/uzer-login.service';

@Injectable()
export class RouterGuard implements CanActivate {

  constructor(private uzerLoginService: UzerLoginService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    let isLoggedIn = this.uzerLoginService.isLoggedIn();


    return (isLoggedIn);
  }
}
