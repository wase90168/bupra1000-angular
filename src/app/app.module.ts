import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {UzerService} from './uzer/uzer.service';
import {UzerComponent} from './uzer/uzer.component';
import { TypeComponent } from './type/type.component';
import { StateComponent } from './state/state.component';
import { SourceComponent } from './source/source.component';
import { RoleComponent } from './role/role.component';
import { MrComponent } from './mr/mr.component';
import { ValueComponent } from './value/value.component';
import { PersonComponent } from './person/person.component';
import { CategoryComponent } from './category/category.component';
import { BreastfeedingComponent } from './breastfeeding/breastfeeding.component';
import { DimensionComponent } from './dimension/dimension.component';
import { PersonPersonComponent } from './person-person/person-person.component';
import { HomeComponent } from './home/home.component';
import {APP_ROUTES} from "./app.routes";
import {RouterModule} from "@angular/router";
import {RouterGuard} from './route-guard.service';
import {UzerLoginService} from './uzer/uzer-login.service';
import {HttpModule} from '@angular/http';
import {BASE_URL, BASE_URL_OAUTH2_TOKEN_REQUEST, BASE_URL_UZERS, CLIENT_APP_NAME, CLIENT_APP_SECRET} from './app.tokens';
import { RegisterComponent } from './register/register.component';
import {RegisterService} from './register/register.service';
import {LoginComponent} from './login/login.component';
import {ValueService} from './value/value.service';
import { ValueEditComponent } from './value/value-edit/value-edit/value-edit.component';
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
import { PersonPersonEditComponent } from './person-person/person-person-edit/person-person-edit.component';
import {PersonPersonEditResolverService} from "./person-person/person-person-edit/person-person-edit-resolver.service";
import {Person_PersonService} from "./person-person/person-person.service";
import {PersonPersonResolverService} from "./person-person/person-person-resolver.service";
import {OAuthService, UrlHelperService} from "angular-oauth2-oidc";
import {PdfmakeModule, PdfmakeService} from "ng-pdf-make";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,

    HttpModule,

    RouterModule.forRoot(APP_ROUTES)
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

  ],
  providers: [
    UzerService,
    UzerLoginService,
    RegisterService,
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
    OAuthService,
    UrlHelperService,


    {provide:BASE_URL, useValue: "http://localhost:8080"},
    {provide:BASE_URL_UZERS, useValue: "http://localhost:8080/uzers"},
    {provide:BASE_URL_OAUTH2_TOKEN_REQUEST, useValue: "http://localhost:8080/oauth/token"},
    {provide:CLIENT_APP_NAME, useValue: "acme"},
    {provide:CLIENT_APP_SECRET, useValue: "Pa$$w0rd"},

    RouterGuard


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
