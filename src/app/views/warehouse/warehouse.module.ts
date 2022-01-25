import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from "@angular/common";

import { WarehouseComponent } from './list/warehouse.component';
import { WHAddItemComponent } from './mgmt/add-item.component';
import { WHUpdateItemComponent } from './mgmt/update-item.component';

import { WarehouseRoutingModule } from './warehouse-routing.module';

@NgModule({
  imports: [
    FormsModule,
    WarehouseRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
  ],
  declarations: [ 
    WarehouseComponent,
    WHAddItemComponent,
    WHUpdateItemComponent
  ]
})
export class WarehouseModule { }
