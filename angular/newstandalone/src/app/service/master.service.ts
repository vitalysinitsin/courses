import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, User } from '../model/LoginModel';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}
  ProceedLogin(_data: LoginModel) {
    return this.http.get<User[]>(
      `http://localhost:3000/user?id=${_data.username}&&password=${_data.password}`
    );
  }

  isLoggedIn() {
    return localStorage.getItem('username') != null;
  }

  ProceedWithRegister(_data: User) {
    return this.http.post('http://localhost:3000/user', _data);
  }
}
