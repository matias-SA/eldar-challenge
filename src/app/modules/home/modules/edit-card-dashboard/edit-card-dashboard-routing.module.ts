import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditCardDashboardComponent } from "./edit-card-dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: EditCardDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCardDashboardRoutingModule {}
