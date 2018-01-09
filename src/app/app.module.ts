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


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
    RegisterComponent
  ],
  providers: [
    UzerService,
    UzerLoginService,
    RegisterService,
    NavbarComponent,

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
