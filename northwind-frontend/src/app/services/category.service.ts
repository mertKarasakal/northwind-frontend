import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Category } from 'app/models/category';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

constructor(private http: HttpClient) { }

path = "https://localhost:44316/api/categories/getall/";

getCategories(): Observable<Category[]> {
  return this.http.get<Category[]>(this.path);
}

  

handleError(err: HttpErrorResponse)  {
  let errorMessage:string = ''
  if(err.error instanceof ErrorEvent){
    errorMessage = 'Bir hata oluştu: '+err.error.message;
  }else{
    errorMessage = 'Sistemsel bir hata!';
  }
  return throwError(errorMessage);
}
}
