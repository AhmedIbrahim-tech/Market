import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  APIURL:string = "https://fakestoreapi.com/";

  constructor(private http : HttpClient) { }

    createNewCart(model:any){
      return this.http.post(this.APIURL + 'carts' , model);
  }
  
}
