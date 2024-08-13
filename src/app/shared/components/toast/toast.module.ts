import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ToastComponent } from "./toast.component";
import { ToastService } from "../../../core/services/toast.service";

@NgModule({
  imports: [CommonModule],
  declarations: [ToastComponent],
  exports: [ToastComponent],
  providers: [ToastService],
})
export class ToastModule {}
