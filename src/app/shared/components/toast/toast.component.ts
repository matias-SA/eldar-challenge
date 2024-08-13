import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ToastService } from "../../../core/services/toast.service";

@Component({
  selector: "app-toast",
  templateUrl: "./toast.component.html",
  styleUrl: "./toast.component.scss",
})
export class ToastComponent implements OnInit, OnDestroy {
  message: string = "";
  type: "success" | "error" | null = null;
  toastVisible: boolean = false;

  private toastSubscription!: Subscription;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastSubscription = this.toastService.toastState$.subscribe(
      (state) => {
        this.message = state.message;
        this.type = state.type;
        this.toastVisible = true;

        setTimeout(() => (this.toastVisible = false), 10000);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.toastSubscription) {
      this.toastSubscription.unsubscribe();
    }
  }
}
