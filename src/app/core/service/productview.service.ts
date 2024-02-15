import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductviewService {
  url = 'http://localhost:3000/products';


  constructor(private http: HttpClient) { }

  public productdetails(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  public oneproductdetails(pid: any) {
    return this.http.get(this.url + "/" + pid);

  }
}
