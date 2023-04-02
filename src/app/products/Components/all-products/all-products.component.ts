import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../Services/products.service";
import { IProduct } from "../../models/IProduct";

@Component({
  selector: "app-all-products",
  templateUrl: "./all-products.component.html",
  styleUrls: ["./all-products.component.scss"],
})
export class AllProductsComponent implements OnInit {
  products: IProduct[] = [];
  Categories: string[] = [];
  loading: boolean = false;
  CartProducts: any[] = [];
  constructor(private _services: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts() {
    this.loading = true;
    return this._services.GetAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        console.log("Error");
      }
    );
  }

  getAllCategories() {
    this.loading = true;
    return this._services.GetAllCategories().subscribe(
      (res: any) => {
        console.log("res" + res);
        this.Categories = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert(error.message);
      }
    );
  }

  FilterByCategory(enevt: any) {
    let Amount = enevt.target.value;
    Amount == "All"
      ? this.getAllProducts()
      : this.GetProductsByCategory(Amount);
  }

  GetProductsByCategory(Cate: string) {
    return this._services.GetProductsByCategory(Cate).subscribe((res: any) => {
      this.products = res;
    });
  }

  AddToCart(event: any) {
    // JSON.stringify // Send Data
    // JSON.parse // Recive Data
    if ("Cart" in localStorage) {
      this.CartProducts = JSON.parse(localStorage.getItem("Cart")!);
      // Chenk if your selected this item Before 
      let exist = this.CartProducts.find((item) => item.item.id == event.item.id);
      if (exist) {
        alert("The Product is already in your cart");
      } else {
        this.CartProducts.push(event);
        localStorage.setItem("Cart", JSON.stringify(this.CartProducts));
      }
    } else {
      this.CartProducts.push(event);
      localStorage.setItem("Cart", JSON.stringify(this.CartProducts));
    }
  }
}
