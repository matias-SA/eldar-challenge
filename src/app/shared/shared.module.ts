import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InputModule } from "./components/input/input.module";
import { ButtonModule } from "./components/button/button.module";
import { HeaderModule } from "./components/header/header.module";
import { CardModule } from "./components/card/card.module";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [InputModule, ButtonModule, HeaderModule, CardModule],
})
export class SharedModule {}
