import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../../../shared/shared.module";
import { HomeService } from "../../services/home.service";
import { DashboardHomeComponent } from "./dashboard-home.component";
import { DashboardHomeRoutingModule } from "./dashboard-home-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [DashboardHomeComponent],
  imports: [
    CommonModule,
    DashboardHomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [HomeService],
})
export class DashboardHomeModule {}
