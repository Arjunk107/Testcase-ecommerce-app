import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddCartService } from 'src/app/core/service/add-cart.service';

@Component({
  selector: 'app-ax-cart-page',
  templateUrl: './ax-cart-page.component.html',
  styleUrls: ['./ax-cart-page.component.scss']
})
export class AxCartPageComponent implements OnInit {
  constructor(private getcart: AddCartService, private route: ActivatedRoute) { }
  cartdetails: any[] = [];
  id: any;

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.getcart.getCartData().subscribe((res: any) => {
      this.cartdetails = res;
    })
  }
}
