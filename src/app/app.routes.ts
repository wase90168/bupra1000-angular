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
import {ValueService} from './value/value.service';
import {ValueEditComponent} from './value/value-edit/value-edit/value-edit.component';
import {ValueEditResolverService} from './value/value-edit/value-edit/value-edit-resolver.service';
import {PersonPersonEditComponent} from "./person-person/person-person-edit/person-person-edit.component";
import {PersonPersonEditResolverService} from "./person-person/person-person-edit/person-person-edit-resolver.service";
import {PersonPersonResolverService} from "./person-person/person-person-resolver.service";

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
    component: UzerComponent,
    canActivate: [RouterGuard]

  },
  {
    path: 'value',
    component: ValueComponent,
    canActivate: [RouterGuard],
  },
  {
    path: 'value-edit/:id',
    component: ValueEditComponent,
    canActivate: [RouterGuard],
    resolve: {
      value: ValueEditResolverService
    }



  },

  {
    path: 'type',
    component: TypeComponent,
    canActivate: [RouterGuard]

  },
  {
    path: 'state',
    component: StateComponent,
    canActivate: [RouterGuard]

  },
  {
    path: 'source',
    component: SourceComponent,
    canActivate: [RouterGuard]

  },
  {
    path: 'role',
    component: RoleComponent,
    canActivate: [RouterGuard]

  },
  {
    path: 'person',
    component: PersonComponent,
    canActivate: [RouterGuard]

  },
  {
    path: 'person-person',
    component: PersonPersonComponent,
    canActivate: [RouterGuard],


  },
  {
    path: 'person-person-edit/:id',
    component: PersonPersonEditComponent,
    canActivate: [RouterGuard],
    resolve: {
      person_person: PersonPersonEditResolverService
    }

  },
  {
    path: 'mr',
    component: MrComponent,
    canActivate: [RouterGuard]

  },
  {
    path: 'dimension',
    component: DimensionComponent,
    canActivate: [RouterGuard]

  },
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [RouterGuard]

  },
  {
    path: 'breastfeeding',
    component: BreastfeedingComponent,
    canActivate: [RouterGuard]

  },


];


export const AppRouterModule
  = RouterModule.forRoot(APP_ROUTES);
