import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { AxHomeComponent } from './ax-widgets/organism/ax-home/ax-home.component';
import { FullPageComponent } from './layouts/full-page/full-page.component';
import { AxProfileComponent } from './ax-widgets/organism/ax-profile/ax-profile.component';
import { AxCartPageComponent } from './ax-widgets/organism/ax-cart-page/ax-cart-page.component';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import('./layouts/home-page/home-page.module').then((m: typeof import('./layouts/home-page/home-page.module')) => m.HomePageModule)
  },
  // {
  //   path: 'home/:id',
  //   component: FullPageComponent,
  //   loadChildren: () => import('./layouts/full-page/full-page.module').then((m: typeof import('./layouts/full-page/full-page.module')) => m.FullPageModule)
  // },
  {
    path: 'home/:id',
    component: AxHomeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'profile/:id',
    component: AxProfileComponent,
  },
  {
    path: 'cart/:id',
    component: AxCartPageComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
