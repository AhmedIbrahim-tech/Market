import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }

    createNewCart(model:any){
      return this.http.post(environment.APIURL + 'carts' , model);
  }
  
}
