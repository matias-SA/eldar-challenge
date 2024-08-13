import { Injectable } from "@angular/core";
import { delay, Observable } from "rxjs";

const users = [
  {
    user: "Soto",
    password: "123456",
    userData: {
      name: "Soto",
      gender: "Masculino",
      dni: 42076275,
      phoneNumber: 1141798030,
      role: "admin",
    },
  },
  {
    user: "Matias",
    password: "123456",
    userData: {
      name: "Matias",
      gender: "Masculino",
      dni: 42076275,
      phoneNumber: 1159917836,
      role: "user",
    },
  },
];

export enum AuthStatus {
  authenticated = "authenticated",
  notAuthenticated = "notAuthenticated",
}

@Injectable()
export class AuthService {
  public authStatus: AuthStatus = AuthStatus.notAuthenticated;

  constructor() {}

  public login = (
    user: string,
    password: string
  ): Observable<boolean | unknown> => {
    return new Observable((observer) => {
      try {
        const foundUser = users.find(
          (u) => u.user === user && u.password === password
        );
        if (foundUser) {
          console.log("Login exitoso");
          this.authStatus = AuthStatus.authenticated;
          localStorage.setItem("dataUser", JSON.stringify(foundUser.userData));
          observer.next(true);
        } else {
          console.log("Fallo login: Credenciales invalidas");
          observer.error(false);
        }
      } catch (error) {
        console.log(error);
        observer.error(false);
      }
    }).pipe(delay(2000));
  };
}
