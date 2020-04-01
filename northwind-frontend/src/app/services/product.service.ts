import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { Product } from 'app/models/product';
import { Observable,throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private httpClient:HttpClient,private router :Router) { }
path = "https://localhost:44316/";

  
getProducts():Observable<Product[]>{
  return this.httpClient.get<Product[]>(this.path + "api/products/getall");
}

getProductsByCategory(categoryId): Observable<Product[]> {

  let newPath = this.path+"api/products/getlistbycategory";
  if (categoryId) {
    newPath += "?categoryId=" + categoryId;
  }else{
    newPath = "https://localhost:44316/api/products/getall";
  }
 
   return this.httpClient.get<Product[]>(newPath);


 

}

getById(productId):Observable<Product>{
  let newPath = this.path+"api/products/getbyid";
  if (productId) {
    newPath += "?productId=" + productId;
  }else{
    newPath = "https://localhost:44316/api/products/getall";
  }

  return this.httpClient.get<Product>(newPath);



}

  addProduct(product:Product):Observable<Product>{
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':'application/json; charset=utf-8',
        'Authorization':'Token',
        'Accept': 'application/json'
      })
    }
    
    
    
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        
      });
    

    return this.httpClient.post<Product>("https://localhost:44316/api/products/add", product,httpOptions);
   

  }

  deleteProduct(product:Product):Observable<Product>{
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':'application/json; charset=utf-8',
        'Authorization':'Token',
        'Accept': 'application/json'
      })
    }

    return this.httpClient.post<Product>("https://localhost:44316/api/products/delete", product,httpOptions);


  }

  updateProduct(product:Product):Observable<Product>{
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':'application/json; charset=utf-8',
        'Authorization':'Token',
        'Accept': 'application/json'
      })
    }

    return this.httpClient.post<Product>("https://localhost:44316/api/products/update", product,httpOptions);
 
    

  }


}
