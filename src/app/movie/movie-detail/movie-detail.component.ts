import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../model/movie.model';
import { MovieService } from '../../model/movie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  isFetching = true;
  movie: Movie = new Movie('', '', '', '', '', '', '');
  movies: Movie[] = [];
  id!: number;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.onGetMovie(this.id);
    });
    this.onFetchMovies();
  }
  onFetchMovies() {
    this.movieService.fetchMovies().subscribe((movies) => {
      this.isFetching = false;
      this.movies = movies;   
    });
  }
  onGetMovie(id: number): void {
    this.movieService.getMovie(id).subscribe(
      (data) => {
        this.isFetching = false;
        this.movie = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
