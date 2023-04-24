import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  APIURL:string = "https://fakestoreapi.com/";

  constructor(private http:HttpClient) { }


  getAllCarts(param?:any){
    let params = new HttpParams();
    params = params.append("startdate" , param?.start).append("enddate" , param?.end);
    return this.http.get(this.APIURL + 'carts' , {params});
  }

  DeleteCart(id:number){
    return this.http.delete(this.APIURL + 'carts/' + id);
  }
}
