import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from './login/login.component';
import {RouterGuard} from './route-guard.service';
import {RegisterComponent} from './register/register.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AppComponent} from './app.component';
import {UzerComponent} from './uzer/uzer.component';
import {ValueComponent} from './value/value.component';
import {TypeComponent} from './type/type.component';
import {StateComponent} from './state/state.component';
import {SourceComponent} from './source/source.component';
import {RoleComponent} from './role/role.component';
import {PersonComponent} from './person/person.component';
import {PersonPersonComponent} from './person-person/person-person.component';
import {MrComponent} from './mr/mr.component';
import {DimensionComponent} from './dimension/dimension.component';
import {CategoryComponent} from './category/category.component';
import {BreastfeedingComponent} from './breastfeeding/breastfeeding.component';

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
  {
    path: 'value',
    component: ValueComponent
  },
  {
    path: 'type',
    component: TypeComponent
  },
  {
    path: 'state',
    component: StateComponent
  },
  {
    path: 'source',
    component: SourceComponent
  },
  {
    path: 'role',
    component: RoleComponent
  },
  {
    path: 'person',
    component: PersonComponent
  },
  {
    path: 'personperson',
    component: PersonPersonComponent
  },
  {
    path: 'mr',
    component: MrComponent
  },
  {
    path: 'dimension',
    component: DimensionComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'breastfeeding',
    component: BreastfeedingComponent
  },


];


export const AppRouterModule
  = RouterModule.forRoot(APP_ROUTES);
