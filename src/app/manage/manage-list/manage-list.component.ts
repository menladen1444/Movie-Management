import { MovieService } from './../../model/movie.service';
import { Movie } from './../../model/movie.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-list',
  templateUrl: './manage-list.component.html',
  styleUrls: ['./manage-list.component.css']
})
export class ManageListComponent implements OnInit {
totalLength: any;
  page:number = 1;

  movies: Movie[] = [];
  isFetching = true;
  constructor( private movieService: MovieService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.onFetchMovies();
  }
  onFetchMovies() {
    this.movieService.fetchMovies().subscribe((movies) => {
       this.totalLength = movies.length;
      this.isFetching = false;
      this.movies = movies;
    });
  }
  onNewMovie() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
