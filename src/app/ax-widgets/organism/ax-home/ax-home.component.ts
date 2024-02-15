import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductviewService } from 'src/app/core/service/productview.service';

@Component({
  selector: 'app-ax-home',
  templateUrl: './ax-home.component.html',
  styleUrls: ['./ax-home.component.scss']
})
export class AxHomeComponent implements OnInit {
  prodctdetails: any[] = [];
  selectval!: string;
  constructor(private productview: ProductviewService) { }
  ngOnInit(): void {
    this.selectval = 'all'
    this.productview.productdetails().subscribe((res: any) => {
      this.prodctdetails = res;
    })

  }

}
