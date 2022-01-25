import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from "@angular/common";

import { ReceiptComponent } from './list/receipt.component';
import { ReceiptDetailComponent } from './detail/receipt-detail.component';
import { CreateReceiptComponent } from './create/create-receipt.component';

import { ReceiptRoutingModule } from './receipt-routing.module'

@NgModule({
  imports: [
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
    ReceiptRoutingModule,
  ],
  declarations: [ 
    ReceiptComponent,
    ReceiptDetailComponent,
    CreateReceiptComponent,
  ]
})
export class ReceiptModule { }
