export interface LoginModel {
  username: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  password: string;
  role: string;
  gender: string;
}

export interface Role {
  value: string;
  viewValue: string;
}
