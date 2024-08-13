import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "../button/button.module";
import { CardComponent } from "./card.component";

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardModule {}
