import { Component, OnInit } from '@angular/core';
import{Movie} from '../model/movie.model';
import{MovieService} from '../model/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show = false;

  constructor() { }
  
  ngOnInit(): void {
  }

}
