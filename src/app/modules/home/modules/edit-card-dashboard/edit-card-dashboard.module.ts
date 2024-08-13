import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../../../shared/shared.module";
import { HomeService } from "../../services/home.service";
import { EditCardDashboardComponent } from "./edit-card-dashboard.component";
import { EditCardDashboardRoutingModule } from "./edit-card-dashboard-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [EditCardDashboardComponent],
  imports: [
    CommonModule,
    EditCardDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [HomeService],
})
export class EditCardDashboardModule {}
