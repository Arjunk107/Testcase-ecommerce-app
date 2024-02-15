import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ax-menu-li',
  templateUrl: './ax-menu-li.component.html',
  styleUrls: ['./ax-menu-li.component.scss']
})
export class AxMenuLiComponent {
  @Input() class!: string;
  @Input() aclass!: string;
  @Input() iclass!: string;
  @Input() data!: string;
  @Input() link!: string;

}
