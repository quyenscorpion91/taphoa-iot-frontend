import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './list/cart.component';
import { CartAddComponent } from './add/cart-add.component';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    data: {
      title: 'Cart'
    },
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: CartAddComponent,
    data: {
      title: 'Add To Cart'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}