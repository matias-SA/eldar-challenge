import { ChangeDetectionStrategy, Component } from "@angular/core";
import { UserService } from "../../../../core/services/user.service";
import { User } from "../../../../core/models/user.interface";

@Component({
  selector: "menu-links-app",
  templateUrl: "./menu-links.component.html",
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuLinksComponent {
  private userData: User | null = JSON.parse(
    this.userService.getDataUser() as string
  ) as User;

  constructor(private userService: UserService) {}

  public routes = [
    {
      label: "Exhibiciones",
      path: "",
      permission: true,
    },
    {
      label: "Editar exhibiciones",
      path: "/editar",
      permission: this.userData!.role === "admin",
    },
  ];
}
