import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  GetAllProducts(){
    return this.http.get(environment.APIURL + 'products');
  }


  GetAllCategories(){
    return this.http.get(environment.APIURL + 'products/categories');
  }

  GetProductsByCategory(Cate:string){
    return this.http.get(environment.APIURL + 'products/category/'+ Cate);
  }
}
