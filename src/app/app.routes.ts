import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from './login/login.component';
import {RouterGuard} from './route-guard.service';
import {RegisterComponent} from './register/register.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AppComponent} from './app.component';
import {UzerComponent} from './uzer/uzer.component';

export const APP_ROUTES: Routes = [
  /*{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },*/
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [RouterGuard]
  },
 /* {
    path: '**',
    redirectTo: 'home'
  },*/
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'uzer',
    component: UzerComponent
  },


];


export const AppRouterModule
  = RouterModule.forRoot(APP_ROUTES);
