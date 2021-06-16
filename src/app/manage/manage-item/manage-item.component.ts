import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from './../../model/movie.service';
import { Movie } from './../../model/movie.model';

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.css']
})
export class ManageItemComponent implements OnInit {

  @Input() movie!: Movie;
  @Input() index: any;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

}
