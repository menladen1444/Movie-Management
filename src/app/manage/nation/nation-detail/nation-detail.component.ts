import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Nation } from 'src/app/model/nation.model';
import { NationService } from 'src/app/model/nation.service';

@Component({
  selector: 'app-nation-detail',
  templateUrl: './nation-detail.component.html',
  styleUrls: ['./nation-detail.component.css']
})
export class NationDetailComponent implements OnInit {

  isFetching = true;
  nation: Nation = new Nation('');
  id!: number;
  constructor(
    private nationService: NationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.onGetNation(this.id);
    });
  }
  onGetNation(id: any): void {
    this.nationService.getNation(id).subscribe(
      (data) => {
        this.isFetching = false;
        this.nation = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onEditNation() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  onDeleteNation() {
    this.nationService.deleteNation(this.id).subscribe(
      (data) => {
        this.isFetching = false;
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
