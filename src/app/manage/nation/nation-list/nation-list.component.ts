import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nation } from 'src/app/model/nation.model';
import { NationService } from 'src/app/model/nation.service';

@Component({
  selector: 'app-nation-list',
  templateUrl: './nation-list.component.html',
  styleUrls: ['./nation-list.component.css']
})
export class NationListComponent implements OnInit {

  nations: Nation[] = [];
  isFetching = true;
  constructor( private nationService: NationService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.onFetchNations();
  }
  onFetchNations() {
    this.nationService.fetchNations().subscribe((nations) => {
      this.isFetching = false;
      this.nations = nations;
    });
  }
  onNewNation() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
