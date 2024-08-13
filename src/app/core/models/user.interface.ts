export interface User {
  name: string;
  gender: string;
  dni: number;
  phoneNumber: number;
  role: Role;
}

type Role = "admin" | "user";
