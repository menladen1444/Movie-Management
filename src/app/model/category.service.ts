import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Category } from './../model/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categorySelected = new EventEmitter<Category>();
  private key: any;
  private categorys: Category[] = [];

  constructor(private http: HttpClient) {}

  getCategory(index: any) {
    return this.http
      .get<{ [key: string]:Category }>( 'https://movie-management-e5833-default-rtdb.firebaseio.com/categorys.json' )
      .pipe(
        map((responseData) => {
          const categorysArray:Category[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              categorysArray.push({ ...responseData[key] 
              });
            }
          }
          return categorysArray[index];
        })
      );
  }

  addCategory(categoryData: Category) {
    this.categorys.push(categoryData);
    return this.http.post<{
      name: string;
    }>('https://movie-management-e5833-default-rtdb.firebaseio.com/categorys.json', categoryData);
  }

  updateCategory(index: number, newCategory: Category) {
    this.categorys[index] = newCategory;
    return this.http.patch<{
      [key: string]: Category;
    }>('https://movie-management-e5833-default-rtdb.firebaseio.com/categorys/' + this.key[index] +'.json', newCategory );
  }
  deleteCategory(index: number) {
    this.categorys.splice(index, 1);
    return this.http.delete<{
      [key: string]: Category;
    }>( 'https://movie-management-e5833-default-rtdb.firebaseio.com/categorys/' + this.key[index] + '.json' );
  }
  fetchCategories() {
    return this.http
      .get<{ [key: string]: Category }>( 'https://movie-management-e5833-default-rtdb.firebaseio.com/categorys.json' )
      .pipe(
        map((responseData) => {
          const categorysArray: Category[] = [];
          const keysArray: string[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              categorysArray.push({ ...responseData[key] });
              keysArray.push(key);
            }
          }
          this.key = keysArray;
          return (this.categorys = categorysArray);
        })
      );
  }
}
