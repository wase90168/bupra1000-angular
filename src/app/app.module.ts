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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
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
    PersonPersonComponent
  ],
  providers: [
    UzerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
