import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from './login/login.component';
import {RouterGuard} from './route-guard.service';

export const APP_ROUTES: Routes = [
  /*{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },*/
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [RouterGuard]
  },
  /*{
    path: '**',
    redirectTo: 'home'
  },*/
  {
    path: 'login',
    component: LoginComponent
  },

];


export const AppRouterModule
  = RouterModule.forRoot(APP_ROUTES);
