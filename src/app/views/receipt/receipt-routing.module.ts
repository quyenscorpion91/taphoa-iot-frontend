import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceiptComponent } from './list/receipt.component';
import { ReceiptDetailComponent } from './detail/receipt-detail.component'
import { CreateReceiptComponent } from './create/create-receipt.component'


const routes: Routes = [
  {
    path: '',
    component: ReceiptComponent,
    data: {
      title: 'Receipt'
    },
    // pathMatch: 'full'
  },
  {
    path: 'detail',
    component: ReceiptDetailComponent,
    data: {
      title: 'Receipt Detail'
    },
  },
  {
    path: 'create',
    component: CreateReceiptComponent,
    data: {
      title: 'Receipt Create'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptRoutingModule {}