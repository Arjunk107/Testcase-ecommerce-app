import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {
  url = 'http://localhost:3000/cart'
  constructor(private http: HttpClient) { }

  public getCartData() {
    return this.http.get(this.url);
  }

  public addcart(cartdata: any) {
    return this.http.post(this.url, cartdata);
  }
  public deletecart(cartid: any) {
    return this.http.delete(this.url + '/' + cartid)
  }
}
