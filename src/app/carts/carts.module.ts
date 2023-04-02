import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './Components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductsModule } from '../products/products.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CartsModule { }
