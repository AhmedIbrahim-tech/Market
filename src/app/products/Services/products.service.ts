import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  APIURL:string = "https://fakestoreapi.com/";

  constructor(private http : HttpClient) { }

  GetAllProducts(){
    return this.http.get(this.APIURL + 'products').pipe(retry(2));
  }


  GetAllCategories(){
    return this.http.get(this.APIURL + 'products/categories').pipe(retry(2));
  }

  GetProductsByCategory(Cate:string){
    return this.http.get(this.APIURL + 'products/category/'+ Cate).pipe(retry(2));
  }

  GetProductsByid(id:number){
    return this.http.get(this.APIURL + 'products/'+ id).pipe(retry(2));
  }
}
