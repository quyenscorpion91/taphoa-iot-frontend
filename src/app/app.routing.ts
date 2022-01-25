import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
// import { RegisterComponent } from './views/register/register.component';
// import { WHAddItemComponent } from './views/warehouse/mgmt/add-item.component';
// import { WHUpdateItemComponent } from './views/warehouse/mgmt/update-item.component';
// import { CreateReceiptComponent } from './views/receipt/create/create-receipt.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  //   data: {
  //     title: 'Register Page'
  //   }
  // },
  // {
  //   path: 'wh-add-item',
  //   component: WHAddItemComponent,
  //   data: {
  //     title: 'Warehouse New Item'
  //   }
  // },
  // {
  //   path: 'wh-update-item',
  //   component: WHUpdateItemComponent,
  //   data: {
  //     title: 'Warehouse New Item'
  //   }
  // },
  // {
  //   path: 'create-receipt',
  //   component: CreateReceiptComponent,
  //   data: {
  //     title: 'New Recipe'
  //   }
  // },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('./views/customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'warehouse',
        loadChildren: () => import('./views/warehouse/warehouse.module').then(m => m.WarehouseModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./views/cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'receipt',
        loadChildren: () => import('./views/receipt/receipt.module').then(m => m.ReceiptModule)
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
