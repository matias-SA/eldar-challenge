import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const dataUser = localStorage.getItem("dataUser");

    if (dataUser) {
      if (state.url.startsWith("/auth")) {
        this.router.navigate([""]);
        return false;
      } else {
        return true;
      }
    } else {
      if (!state.url.startsWith("/auth")) {
        this.router.navigate(["/auth"]);
        return false;
      } else {
        return true;
      }
    }
  }
}
