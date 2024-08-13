import { ChangeDetectionStrategy, Component } from "@angular/core";
import { UserService } from "../../../../core/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "dropdown-user-app",
  templateUrl: "./dropdown-user.component.html",
  styleUrl: "./dropdown-user.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdoenUserComponent {
  public userData = JSON.parse(this.userService.getDataUser() as string);
  public isOpen: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    localStorage.removeItem("dataUser");
    this.router.navigateByUrl("/auth");
  }
}
