import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Movie } from '../model/movie.model';
import { MovieService } from '../model/movie.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  loadedPosts = [];
  constructor(private http: HttpClient) { }
  ngOnInit() { }
  onCreatePost(postData: { title: string; content: string }) {
    this.http.post("https://movie-management-e5833-default-rtdb.firebaseio.com/posts.json", postData).subscribe((responseData) => {
      console.log(responseData);
    });
  }
  onFetchPosts() {
    this.fetchPosts();
  }
  private fetchPosts() {
    this.http
      .get("https://movie-management-e5833-default-rtdb.firebaseio.com/posts.json").subscribe((responseData) => { console.log(responseData); });
  }

}