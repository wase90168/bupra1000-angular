import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AddValueFlowComponent} from './add-value-flow/add-value-flow.component';
import {ADD_VALUE_FLOW_ROUTES} from "./add-value-flow.routes";
import {AddValueFlowService} from "./add-value-flow.service";
import {AddValueFlowPersonComponent} from './add-value-flow-person/add-value-flow-person.component';
import { AddValueFlowMrComponent } from './add-value-flow-mr/add-value-flow-mr.component';
import { AddValueFlowDimensionComponent } from './add-value-flow-dimension/add-value-flow-dimension.component';
import { AddValueFlowSourceComponent } from './add-value-flow-source/add-value-flow-source.component';
import { AddValueFlowValueComponent } from './add-value-flow-value/add-value-flow-value.component';
import { AddValueFlowViewComponent } from './add-value-flow-view/add-value-flow-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,


    RouterModule.forChild(ADD_VALUE_FLOW_ROUTES)


  ],
  declarations: [AddValueFlowComponent,
    AddValueFlowPersonComponent,
    AddValueFlowMrComponent,
    AddValueFlowDimensionComponent,
    AddValueFlowSourceComponent,
    AddValueFlowValueComponent,
    AddValueFlowViewComponent],

  providers: [AddValueFlowService],

  exports: [AddValueFlowComponent]
})
export class AddValueFlowModule {
}
