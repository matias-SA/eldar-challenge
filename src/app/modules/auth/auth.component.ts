import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { ToastService } from "../../core/services/toast.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
})
export class AuthComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService
  ) {
    this.initForm();
  }

  public initForm(): void {
    this.form = this.fb.group({
      user: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(3)]],
    });
  }

  public login() {
    const { user, password } = this.form.value;

    this.authService.login(user, password).subscribe({
      next: () => {
        this.router.navigateByUrl("/dashboard");
        this.toastService.showToast("success", "Inicio de sesion correcto");
      },
      error: (err) => {
        this.toastService.showToast("error", "Error de credenciales");
        console.error(err);
      },
    });
  }
}
