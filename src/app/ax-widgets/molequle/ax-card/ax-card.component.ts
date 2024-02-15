import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddCartService } from 'src/app/core/service/add-cart.service';
import { ProductviewService } from 'src/app/core/service/productview.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ax-card',
  templateUrl: './ax-card.component.html',
  styleUrls: ['./ax-card.component.scss']
})
export class AxCardComponent implements OnInit {
  @Input() title!: string;
  @Input() details!: string;
  @Input() img!: string;
  @Input() cartid!: string;
  @Input() prize!: string;
  uid!: string;
  productdata = {
    id: '',
    productid: '',
    userid: '',
    item: '',
    name: '',
    details: ""
  }
  cartdata: any[] = []
  constructor(private productdetails: ProductviewService, private route: ActivatedRoute, private addToCart: AddCartService) {

  }
  newcartid!: any;
  ngOnInit(): void {
    this.uid = this.route.snapshot.params['id'];
    this.addToCart.getCartData().subscribe((res: any) => {
      this.cartdata = res;
      this.newcartid = this.cartdata.length + 1
    })

  }
  hello() {
    console.log("hii hello" + this.cartid)
    this.productdetails.oneproductdetails(this.cartid).subscribe((res: any) => {
      this.productdata = res;
      this.productview();
    })

  }
  productview() {
    this.productdata.userid = this.uid;
    console.log(this.productdata);
    this.addToCart.addcart(this.productdata).subscribe((res) => {
      Swal.fire("Added successfully");
    })
  }
}
