import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from "@angular/common";

import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module'

@NgModule({
  imports: [
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
    CustomerRoutingModule,
  ],
  declarations: [ 
    CustomerComponent,
  ]
})
export class CustomerModule { }
