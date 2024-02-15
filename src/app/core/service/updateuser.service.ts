import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateuserService {

  url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }
  public userdata(uid: any) {
    return this.http.get(this.url + "/" + uid)
  }
  public updatedata(userid: any, usernewdata: any) {
    return this.http.put(this.url + '/' + userid, usernewdata);
  }
}
