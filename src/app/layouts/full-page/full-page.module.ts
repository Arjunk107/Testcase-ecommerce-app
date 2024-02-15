import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullPageRoutingModule } from './full-page-routing.module';
import { FullPageComponent } from './full-page.component';
import { AxNavbarComponent } from 'src/app/shared/ax-navbar/ax-navbar.component';


@NgModule({
  declarations: [
    FullPageComponent
  ],
  imports: [
    CommonModule,
    FullPageRoutingModule,
  ]
})
export class FullPageModule { }
