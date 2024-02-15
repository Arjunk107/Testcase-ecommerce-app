import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }
  public adduser(userdata: any) {
    return this.http.post<any>(this.url, userdata);
  }
}
