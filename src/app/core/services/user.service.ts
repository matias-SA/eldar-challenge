import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private DATA_USER_KEY = "dataUser" as const;
  private dataUser!: string | null;

  constructor() {}

  getDataUser(): string | null {
    if (!this.dataUser) {
      this.setUserFromStorage();
    }
    return localStorage.getItem(this.DATA_USER_KEY);
  }

  private setUserFromStorage(): void {
    this.dataUser = localStorage.getItem(this.DATA_USER_KEY);
  }
}
