import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }


  getAllCarts(param?:any){
    let params = new HttpParams();
    params = params.append("startdate" , param?.start).append("enddate" , param?.end);
    return this.http.get(environment.APIURL + 'carts' , {params});
  }

  DeleteCart(id:number){
    return this.http.delete(environment.APIURL + 'carts/' + id);
  }
}
