import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { RoleGuard } from "../../core/guards/role.guard";

const routes: Routes = [
  {
    component: HomeComponent,
    path: "",
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "dashboard",
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./modules/dashboard-home/dashboard-home.module").then(
            (m) => m.DashboardHomeModule
          ),
      },
      {
        path: "editar",
        loadChildren: () =>
          import("./modules/edit-dashboard/edit-dashboard.module").then(
            (m) => m.EditDashboardModule
          ),
        canActivate: [RoleGuard],
      },
      {
        path: "editar/:id",
        loadChildren: () =>
          import(
            "./modules/edit-card-dashboard/edit-card-dashboard.module"
          ).then((m) => m.EditCardDashboardModule),
        canActivate: [RoleGuard],
      },
      {
        path: "add-exhibition",
        loadChildren: () =>
          import(
            "./modules/edit-card-dashboard/edit-card-dashboard.module"
          ).then((m) => m.EditCardDashboardModule),
        canActivate: [RoleGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
