import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ToastService {
  private toastSubject = new Subject<{
    type: "success" | "error";
    message: string;
  }>();
  toastState$ = this.toastSubject.asObservable();

  showToast(type: "success" | "error", message: string): void {
    this.toastSubject.next({ type, message });
  }
}
