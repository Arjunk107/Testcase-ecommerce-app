import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ax-navbar',
  templateUrl: './ax-navbar.component.html',
  styleUrls: ['./ax-navbar.component.scss']
})
export class AxNavbarComponent implements OnInit {
  id!: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

  }
}
