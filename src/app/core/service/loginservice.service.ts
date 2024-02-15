import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }

  public getallusers() {
    return this.http.get("http://localhost:3000/users");
  }
  isLogin: boolean = false;
  login() {
    this.isLogin = true;
  }
  logout() {
    this.isLogin = false;
  }
  isAuthenticated() {
    return this.isLogin;
  }
}
