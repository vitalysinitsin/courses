import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './common/about/about.component';
import { ContactComponent } from './common/contact/contact.component';
import { CustomerComponent } from './common/customer/customer.component';
import { AddComponent } from './common/add/add.component';
import { StatusComponent } from './common/status/status.component';
import { authGuard } from './guard/auth.guard';
import { childAuthGuard } from './guard/child-auth.guard';
import { authDeactivateGuard } from './guard/auth-deactivate.guard';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';
import { ProductComponent } from './common/product/product.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [authGuard],
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [authGuard],
  },
  {
    path: 'contact/:submenu/:id',
    loadComponent: () =>
      import('./common/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'customer',
    component: CustomerComponent,
    canActivate: [authGuard],
    canActivateChild: [childAuthGuard],
    canDeactivate: [authDeactivateGuard],
    children: [
      {
        path: 'add',
        component: AddComponent,
      },
      {
        path: 'edit/:id',
        component: AddComponent,
      },
    ],
  },
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: StatusComponent,
  },
];
