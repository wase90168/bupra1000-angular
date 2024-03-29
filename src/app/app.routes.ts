import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RouterGuard} from './route-guard.service';
import {RegisterComponent} from './register/register.component';
import {UzerComponent} from './uzer/uzer.component';
import {ValueComponent} from './value/value.component';
import {TypeComponent} from './type/type.component';
import {StateComponent} from './state/state.component';
import {SourceComponent} from './source/source.component';
import {RoleComponent} from './role/role.component';
import {PersonComponent} from './person/person.component';
import {PersonPersonComponent} from './person-person/person-person.component';
import {MrComponent} from './mr/mr.component';
import {BiomarkerComponent} from './biomarker/biomarker.component';
import {CategoryComponent} from './category/category.component';
import {BreastfeedingComponent} from './breastfeeding/breastfeeding.component';
import {ValueEditComponent} from './value/value-edit/value-edit/value-edit.component';
import {ValueEditResolverService} from './value/value-edit/value-edit/value-edit-resolver.service';
import {PersonPersonEditComponent} from './person-person/person-person-edit/person-person-edit.component';
import {PersonPersonEditResolverService} from './person-person/person-person-edit/person-person-edit-resolver.service';
import {BreastfeedingEditComponent} from './breastfeeding/breastfeeding-edit/breastfeeding-edit.component';
import {BreastfeedingEditResolverService} from './breastfeeding/breastfeeding-edit/breastfeeding-edit-resolver.service';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {CategoryEditResolverService} from './category/category-edit/category-edit-resolver.service';
import {BiomarkerEditResolverService} from './biomarker/biomarker-edit/biomarker-edit-resolver.service';
import {BiomarkerEditComponent} from './biomarker/biomarker-edit/biomarker-edit.component';
import {MrEditComponent} from './mr/mr-edit/mr-edit.component';
import {MrEditResolverService} from './mr/mr-edit/mr-edit-resolver.service';
import {TypeEditComponent} from './type/type-edit/type-edit.component';
import {TypeEditResolverService} from './type/type-edit/type-edit-resolver.service';
import {StateEditComponent} from './state/state-edit/state-edit.component';
import {StateEditResolverService} from './state/state-edit/state-edit-resolver.service';
import {SourceEditComponent} from './source/source-edit/source-edit.component';
import {SourceEditResolverService} from './source/source-edit/source-edit-resolver.service';
import {PersonEditComponent} from './person/person-edit/person-edit.component';
import {PersonEditResolverService} from './person/person-edit/person-edit-resolver.service';
import {DimensionComponent} from './dimension/dimension.component';
import {DimensionEditComponent} from './dimension/dimension-edit/dimension-edit.component';
import {DimensionEditResolverService} from './dimension/dimension-edit/dimension-edit-resolver.service';
import {ChangePasswordComponent} from './change-password/change-password.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dimension',
    component: DimensionComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [RouterGuard]
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
    path: 'biomarker',
    component: BiomarkerComponent,
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
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [RouterGuard]

  },
  {
    path: 'breastfeeding-edit/:id',
    component: BreastfeedingEditComponent,
    canActivate: [RouterGuard],
    resolve: {
      breastfeeding: BreastfeedingEditResolverService
    }

  },
  {
    path: 'category-edit/:id',
    component: CategoryEditComponent,
    canActivate: [RouterGuard],
    resolve: {
      category: CategoryEditResolverService
    }

  },
  {
    path: 'biomarker-edit/:id',
    component: BiomarkerEditComponent,
    canActivate: [RouterGuard],
    resolve: {
      biomarker: BiomarkerEditResolverService
    }

  },
  {
    path: 'mr-edit/:id',
    component: MrEditComponent,
    canActivate: [RouterGuard],
    resolve: {
      mr: MrEditResolverService
    }

  },
  {
    path: 'type-edit/:id',
    component: TypeEditComponent,
    canActivate: [RouterGuard],
    resolve: {
      type: TypeEditResolverService
    }

  },
  {
    path: 'state-edit/:id',
    component: StateEditComponent,
    canActivate: [RouterGuard],
    resolve: {
      state:StateEditResolverService
    }

  },
  {
    path: 'source-edit/:id',
    component: SourceEditComponent,
    canActivate: [RouterGuard],
    resolve: {
      source:SourceEditResolverService
    }

  },
  {
    path: 'person-edit/:id',
    component: PersonEditComponent,
    canActivate: [RouterGuard],
    resolve: {
      person:PersonEditResolverService
    }

  },
  {
    path: 'dimension-edit/:id',
    component: DimensionEditComponent,
    canActivate: [RouterGuard],
    resolve: {
      dimension: DimensionEditResolverService
    }

  },


];

