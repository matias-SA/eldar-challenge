import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditDashboardComponent } from "./edit-dashboard.component";
import { EditDashboardRoutingModule } from "./edit-dashboard-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { HomeService } from "../../services/home.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [EditDashboardComponent],
  imports: [
    CommonModule,
    EditDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [HomeService],
})
export class EditDashboardModule {}
