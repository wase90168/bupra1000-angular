import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';

import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {UzerService} from './uzer/uzer.service';
import {UzerComponent} from './uzer/uzer.component';
import {TypeComponent} from './type/type.component';
import {StateComponent} from './state/state.component';
import {SourceComponent} from './source/source.component';
import {RoleComponent} from './role/role.component';
import {MrComponent} from './mr/mr.component';
import {ValueComponent} from './value/value.component';
import {PersonComponent} from './person/person.component';
import {CategoryComponent} from './category/category.component';
import {BreastfeedingComponent} from './breastfeeding/breastfeeding.component';
import {DimensionComponent} from './dimension/dimension.component';
import {PersonPersonComponent} from './person-person/person-person.component';
import {HomeComponent} from './home/home.component';
import {APP_ROUTES} from "./app.routes";
import {RouterModule} from "@angular/router";
import {RouterGuard} from './route-guard.service';
import {UzerLoginService} from './uzer/uzer-login.service';
import {HttpModule} from '@angular/http';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ValueService} from './value/value.service';
import {ValueEditComponent} from './value/value-edit/value-edit/value-edit.component';
import {CommonModule} from '@angular/common';
import {BreastfeedingService} from "./breastfeeding/breastfeeding.service";
import {CategoryService} from "./category/category.service";
import {DimensionService} from "./dimension/dimension.service";
import {MrService} from "./mr/mr.service";
import {PersonService} from "./person/person.service";
import {SourceService} from "./source/source.service";
import {StateService} from "./state/state.service";
import {TypeService} from "./type/type.service";
import {AppService} from "./app.service";
import {ValueEditResolverService} from "./value/value-edit/value-edit/value-edit-resolver.service";
import {PersonPersonEditComponent} from './person-person/person-person-edit/person-person-edit.component';
import {PersonPersonEditResolverService} from "./person-person/person-person-edit/person-person-edit-resolver.service";
import {Person_PersonService} from "./person-person/person-person.service";
import {PersonPersonResolverService} from "./person-person/person-person-resolver.service";
import {BreastfeedingEditComponent} from './breastfeeding/breastfeeding-edit/breastfeeding-edit.component';
import {BreastfeedingEditResolverService} from "./breastfeeding/breastfeeding-edit/breastfeeding-edit-resolver.service";
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import {CategoryEditResolverService} from "./category/category-edit/category-edit-resolver.service";
import { DimensionEditComponent } from './dimension/dimension-edit/dimension-edit.component';
import {DimensionEditResolverService} from "./dimension/dimension-edit/dimension-edit-resolver.service";
import { MrEditComponent } from './mr/mr-edit/mr-edit.component';
import {MrEditResolverService} from "./mr/mr-edit/mr-edit-resolver.service";
import { TypeEditComponent } from './type/type-edit/type-edit.component';
import {TypeEditResolverService} from "./type/type-edit/type-edit-resolver.service";
import { StateEditComponent } from './state/state-edit/state-edit.component';
import {StateEditResolverService} from "./state/state-edit/state-edit-resolver.service";
import { SourceEditComponent } from './source/source-edit/source-edit.component';
import {SourceEditResolverService} from "./source/source-edit/source-edit-resolver.service";
import { PersonEditComponent } from './person/person-edit/person-edit.component';
import {PersonEditResolverService} from "./person/person-edit/person-edit-resolver.service";
import {AddValueFlowModule} from "./add-value-flow/add-value-flow.module";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AddValueFlowModule,


    HttpModule,

    RouterModule.forRoot(APP_ROUTES, { useHash: true, enableTracing: true})
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    UzerComponent,
    TypeComponent,
    StateComponent,
    SourceComponent,
    RoleComponent,
    MrComponent,
    ValueComponent,
    PersonComponent,
    CategoryComponent,
    BreastfeedingComponent,
    DimensionComponent,
    PersonPersonComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ValueEditComponent,
    PersonPersonEditComponent,
    BreastfeedingEditComponent,
    CategoryEditComponent,
    DimensionEditComponent,
    MrEditComponent,
    TypeEditComponent,
    StateEditComponent,
    SourceEditComponent,
    PersonEditComponent,

  ],
  providers: [
    UzerService,
    UzerLoginService,
    NavbarComponent,
    ValueService,
    BreastfeedingService,
    CategoryService,
    DimensionService,
    MrService,
    PersonService,
    Person_PersonService,
    SourceService,
    StateService,
    TypeService,
    AppService,
    ValueEditResolverService,
    PersonPersonEditResolverService,
    PersonPersonResolverService,
    BreastfeedingEditResolverService,
    CategoryEditResolverService,
    DimensionEditResolverService,
    MrEditResolverService,
    TypeEditResolverService,
    StateEditResolverService,
    SourceEditResolverService,
    PersonEditResolverService,



    RouterGuard


  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
