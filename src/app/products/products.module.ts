import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './Components/product/product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProductsModule { }
