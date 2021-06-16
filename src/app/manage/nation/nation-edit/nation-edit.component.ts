import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Nation } from 'src/app/model/nation.model';
import { NationService } from 'src/app/model/nation.service';

@Component({
  selector: 'app-nation-edit',
  templateUrl: './nation-edit.component.html',
  styleUrls: ['./nation-edit.component.css'],
})
export class NationEditComponent implements OnInit {

  isFetching = true;
  id!: number;

  editMode = false;
  nationForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private nationService: NationService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    });
    this.onGetNation(this.id);
  }

  private initForm(b: Nation) {
    let nationName = '';

    if (this.editMode) {
      const nation = b;
      nationName = nation.name;
    }

    this.nationForm = new FormGroup({
      name: new FormControl(nationName, Validators.required),
    });
  }
  onGetNation(id: any): void {
    this.nationService.getNation(id).subscribe(
      (data) => {
        this.isFetching = false;
        this.initForm(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onSubmit() {
    if (this.editMode) {
      this.onUpdateNation(this.id, this.nationForm.value);
    } else {
      this.onAddNation(this.nationForm.value);
    }
  }

  onUpdateNation(id: number,nation: Nation) {
    this.nationService.updateNation(id, nation).subscribe(
      (data) => {
        this.isFetching = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onAddNation(nation: Nation) {
    this.nationService.addNation(nation).subscribe(
      (data) => {
        this.isFetching = false;
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
