import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/Components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/Components/product-details/product-details.component';
import { CartComponent } from './carts/Components/cart/cart.component';

const routes: Routes = [
  {path : "Products" , component : AllProductsComponent},
  {path:"details" , component : ProductDetailsComponent},
  {path:"Cart" , component:CartComponent},

  	// Last Route
  {path:"**" , redirectTo : "Products" , pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
