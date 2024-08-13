import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { MenuLinksComponent } from "./menu-links/menu-links.component";
import { DropdoenUserComponent } from "./dropdown-user/dropdown-user.component";

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, MenuLinksComponent, DropdoenUserComponent],
  exports: [HeaderComponent, MenuLinksComponent, DropdoenUserComponent],
})
export class HeaderModule {}
