import {Routes} from "@angular/router";
import {AddValueFlowComponent} from "./add-value-flow/add-value-flow.component";
import {AddValueFlowPersonComponent} from "./add-value-flow-person/add-value-flow-person.component";
import {RouterGuard} from "../route-guard.service";
import {AddValueFlowMrComponent} from "./add-value-flow-mr/add-value-flow-mr.component";
import {AddValueFlowDimensionComponent} from "./add-value-flow-dimension/add-value-flow-dimension.component";
import {AddValueFlowSourceComponent} from "./add-value-flow-source/add-value-flow-source.component";
import {AddValueFlowValueComponent} from "./add-value-flow-value/add-value-flow-value.component";
import {AddValueFlowViewComponent} from "./add-value-flow-view/add-value-flow-view.component";


export const ADD_VALUE_FLOW_ROUTES: Routes = [
  {
    path: 'add-value-flow',
    component: AddValueFlowComponent,
    canActivate: [RouterGuard],
    children: [
      {
        path: 'person',
        component: AddValueFlowPersonComponent,
        canActivate: [RouterGuard]
      },
      {
        path: 'mr',
        component: AddValueFlowMrComponent,
        canActivate: [RouterGuard]
      },
      {
        path: 'dimension',
        component: AddValueFlowDimensionComponent,
        canActivate: [RouterGuard]
      },
      {
        path: 'source',
        component: AddValueFlowSourceComponent,
        canActivate: [RouterGuard]
      },
      {
        path: 'value',
        component: AddValueFlowValueComponent,
        canActivate: [RouterGuard]
      },
      {
        path: 'view',
        component: AddValueFlowViewComponent,
        canActivate: [RouterGuard]
      }

    ]
  }

];







