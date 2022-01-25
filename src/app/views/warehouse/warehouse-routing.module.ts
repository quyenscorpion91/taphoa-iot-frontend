import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarehouseComponent } from './list/warehouse.component';
import { WHAddItemComponent } from './mgmt/add-item.component';
import { WHUpdateItemComponent } from './mgmt/update-item.component';

const routes: Routes = [
  {
    path: '',
    component: WarehouseComponent,
    data: {
      title: 'Warehouse'
    },
    pathMatch: 'full'
  },
  {
    path: 'wh-add-item',
    component: WHAddItemComponent,
    data: {
      title: 'Add new item'
    },
  },
  {
    path: 'wh-update-item',
    component: WHUpdateItemComponent,
    data: {
      title: 'Add new item'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule {}