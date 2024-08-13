import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditDashboardComponent } from "./edit-dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: EditDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDashboardRoutingModule {}
