import { Component, OnInit } from "@angular/core";
import { CartService } from "../../Service/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  CartProducts: any[] = [];
  totaPrice: any = 0;
  success:boolean = false;
  constructor(private _service : CartService) {}

  ngOnInit(): void {
    this.GetCartProducts();
  }

  GetCartProducts() {
    // JSON.stringify // Send Data
    // JSON.parse // Recive Data
    if ("Cart" in localStorage) {
      this.CartProducts = JSON.parse(localStorage.getItem("Cart")!);
    }
    this.getCatTotalPrice();
  }

  getCatTotalPrice() {
    this.totaPrice = 0;
    for (let x in this.CartProducts) {
      this.totaPrice +=
        this.CartProducts[x].item.price * this.CartProducts[x].quantity;
    }
  }

  AddAmount(index:any){
    this.CartProducts[index].quantity++
    this.getCatTotalPrice();
    localStorage.setItem("Cart", JSON.stringify(this.CartProducts));
  }

  
  MinAmount(index:any){
    this.CartProducts[index].quantity--
    this.getCatTotalPrice();
    localStorage.setItem("Cart", JSON.stringify(this.CartProducts));
  }

  DetectChange(){
    this.getCatTotalPrice();
    localStorage.setItem("Cart", JSON.stringify(this.CartProducts));
  }


  DeteleProduct(index:any){
    this.CartProducts.splice(index , 1);
    this.getCatTotalPrice();
    localStorage.setItem("Cart", JSON.stringify(this.CartProducts));
  }


  ClearData(){
    this.CartProducts = [];
    this.getCatTotalPrice();
    localStorage.setItem("Cart", JSON.stringify(this.CartProducts));

  }

  buyOrder(){
    let AllProducts = this.CartProducts.map(item => {
      return {productId:item.item.id , quantity:item.quantity}
    })
    let model = {
      userId:5,
      date:new Date(),
      products:AllProducts

    }

    this._service.createNewCart(model).subscribe(res => {
      this.success = true
      setTimeout(() => {
      this.success = false
      }, 3000);
    });
    console.log(model);
  }
}
