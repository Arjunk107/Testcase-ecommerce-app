import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AxInputComponent } from './ax-widgets/atom/ax-input/ax-input.component';
import { AxLoginComponent } from './ax-widgets/organism/ax-login/ax-login.component';
import { AxSignupComponent } from './ax-widgets/organism/ax-signup/ax-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AxHomeComponent } from './ax-widgets/organism/ax-home/ax-home.component';
import { AxNavbarComponent } from './shared/ax-navbar/ax-navbar.component';
import { AxMenuLiComponent } from './ax-widgets/atom/ax-menu-li/ax-menu-li.component';
import { AxProfileComponent } from './ax-widgets/organism/ax-profile/ax-profile.component';
import { AxCardComponent } from './ax-widgets/molequle/ax-card/ax-card.component';
import { AxAddcartbtnComponent } from './ax-widgets/atom/ax-addcartbtn/ax-addcartbtn.component';
import { AxCartPageComponent } from './ax-widgets/organism/ax-cart-page/ax-cart-page.component';
import { AxCartCardComponent } from './ax-widgets/molequle/ax-cart-card/ax-cart-card.component';
import { NgModel } from '@angular/forms';
import { AxFooterComponent } from './shared/ax-footer/ax-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AxInputComponent,
    AxLoginComponent,
    AxSignupComponent,
    AxHomeComponent,
    AxNavbarComponent,
    AxMenuLiComponent,
    AxProfileComponent,
    AxCardComponent,
    AxAddcartbtnComponent,
    AxCartPageComponent,
    AxCartCardComponent,
    AxFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
