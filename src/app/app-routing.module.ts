import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/Components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/Components/product-details/product-details.component';
import { CartComponent } from './carts/Components/cart/cart.component';
import { AdminComponent } from './admin/Components/admin/admin.component';

const routes: Routes = [
  {path:'' , redirectTo : "Products", pathMatch:"full"},
  {path : "Products" , component : AllProductsComponent},
  {path:"details/:id" , component : ProductDetailsComponent},
  {path:"Cart" , component:CartComponent},
  {path:"AdminCart" , component:AdminComponent},

  	// Last Route
  {path:"**" , redirectTo : "Cart" , pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
