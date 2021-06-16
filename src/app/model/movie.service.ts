import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Movie } from './../model/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movieSelected = new EventEmitter<Movie>();
  private key: any;
  private movies: Movie[] = [];

  constructor(private http: HttpClient) {}

  getMovie(index: any) {
    return this.http
      .get<{ [key: string]: Movie }>( 'https://movie-management-e5833-default-rtdb.firebaseio.com/movies.json' )
      .pipe(
        map((responseData) => {
          const moviesArray:Movie[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              moviesArray.push({ ...responseData[key] 
              });
            }
          }
          return moviesArray[index];
        })
      );
  }

  addMovie(movieData: Movie) {
    this.movies.push(movieData);
    return this.http.post<{
      name: string;
      description: string;
      imagePath: string;
      year: number;
      duration: number;
      nation: string;
      category: string;
    }>('https://movie-management-e5833-default-rtdb.firebaseio.com/movies.json', movieData);
  }

  updateMovie(index: number, newMovie: Movie) {
    this.movies[index] = newMovie;
    return this.http.patch<{
      [key: string]: Movie;
    }>('https://movie-management-e5833-default-rtdb.firebaseio.com/movies/' + this.key[index] +'.json', newMovie );
  }
  deleteMovie(index: number) {
    this.movies.splice(index, 1);
    return this.http.delete<{
      [key: string]: Movie;
    }>( 'https://movie-management-e5833-default-rtdb.firebaseio.com/movies/' + this.key[index] + '.json' );
  }
  fetchMovies() {
    return this.http
      .get<{ [key: string]: Movie }>( 'https://movie-management-e5833-default-rtdb.firebaseio.com/movies.json' )
      .pipe(
        map((responseData) => {
          const moviesArray: Movie[] = [];
          const keysArray: string[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              moviesArray.push({ ...responseData[key] });
              keysArray.push(key);
            }
          }
          this.key = keysArray;
          return (this.movies = moviesArray);
        })
      );
  }
}
