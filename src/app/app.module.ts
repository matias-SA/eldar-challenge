import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./modules/auth/auth.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeModule } from "./modules/home/home.module";
import { provideHttpClient } from "@angular/common/http";
import { ToastModule } from "./shared/components/toast/toast.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    // Modulos
    AuthModule,
    HomeModule,
  ],
  providers: [provideHttpClient()], //ESTO ES NUEVO :O
  bootstrap: [AppComponent],
})
export class AppModule {}
