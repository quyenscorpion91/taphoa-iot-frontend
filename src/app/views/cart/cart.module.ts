import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from "@angular/common";

import { CartComponent } from './list/cart.component';
import { CartAddComponent } from './add/cart-add.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CartRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
  ],
  declarations: [ 
    CartComponent,
    CartAddComponent,
  ]
})
export class CartModule { }
