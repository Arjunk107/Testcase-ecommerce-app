import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCartService } from 'src/app/core/service/add-cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ax-cart-card',
  templateUrl: './ax-cart-card.component.html',
  styleUrls: ['./ax-cart-card.component.scss']
})
export class AxCartCardComponent implements OnInit {
  @Input() title!: string;
  @Input() content!: string;
  @Input() imgurl!: string;
  @Input() prize!: string;
  @Input() proId!: string;
  id: any;
  constructor(private cartdetails: AddCartService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

  }
  onDelete(productid: any) {
    this.cartdetails.deletecart(productid).subscribe((res: any) => {
      Swal.fire("cancelled the item");
    })
  }
}
