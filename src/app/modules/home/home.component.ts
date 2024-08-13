import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <div class="home-container ">
      <header-app></header-app>
      <div class="mx-7 mt-5">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class HomeComponent {
  constructor() {}
}
