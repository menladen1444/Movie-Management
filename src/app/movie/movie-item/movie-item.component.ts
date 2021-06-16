import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from './../../model/movie.service';
import { Movie } from './../../model/movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie!: Movie;
  @Input() index!: any;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

}
