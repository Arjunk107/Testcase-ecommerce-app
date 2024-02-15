import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AxLoginComponent } from 'src/app/ax-widgets/organism/ax-login/ax-login.component';
import { AxSignupComponent } from 'src/app/ax-widgets/organism/ax-signup/ax-signup.component';

const routes: Routes = [
  {
    path: '',
    component: AxLoginComponent
  },
  {
    path: 'signup',
    component: AxSignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
