import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Nation } from './../model/nation.model';

@Injectable({
  providedIn: 'root',
})
export class NationService {
  nationSelected = new EventEmitter<Nation>();
  private key: any;
  private nations: Nation[] = [];

  constructor(private http: HttpClient) {}

  getNation(index: any) {
    return this.http
      .get<{ [key: string]: Nation }>( 'https://movie-management-e5833-default-rtdb.firebaseio.com/nations.json' )
      .pipe(
        map((responseData) => {
          const nationsArray:Nation[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              nationsArray.push({ ...responseData[key] 
              });
            }
          }
          return nationsArray[index];
        })
      );
  }

  addNation(nationData: Nation) {
    this.nations.push(nationData);
    return this.http.post<{
      name: string;
    }>('https://movie-management-e5833-default-rtdb.firebaseio.com/nations.json', nationData);
  }

  updateNation(index: number, newNation: Nation) {
    this.nations[index] = newNation;
    return this.http.patch<{
      [key: string]: Nation;
    }>('https://movie-management-e5833-default-rtdb.firebaseio.com/nations/' + this.key[index] +'.json', newNation );
  }
  deleteNation(index: number) {
    this.nations.splice(index, 1);
    return this.http.delete<{
      [key: string]:Nation;
    }>( 'https://movie-management-e5833-default-rtdb.firebaseio.com/nations/' + this.key[index] + '.json' );
  }
  fetchNations() {
    return this.http
      .get<{ [key: string]: Nation }>( 'https://movie-management-e5833-default-rtdb.firebaseio.com/nations.json' )
      .pipe(
        map((responseData) => {
          const nationsArray: Nation[] = [];
          const keysArray: string[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              nationsArray.push({ ...responseData[key] });
              keysArray.push(key);
            }
          }
          this.key = keysArray;
          return (this.nations =nationsArray);
        })
      );
  }
}
