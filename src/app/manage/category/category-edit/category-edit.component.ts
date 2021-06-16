import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/model/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  isFetching = true;
  id!: number;

  editMode = false;
  categoryForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    });
    this.onGetCategory(this.id);
  }

  private initForm(b: Category) {
    let categoryName = '';

    if (this.editMode) {
      const category = b;
      categoryName = category.name;
    }

    this.categoryForm = new FormGroup({
      name: new FormControl(categoryName, Validators.required),
    });
  }
  onGetCategory(id: any): void {
    this.categoryService.getCategory(id).subscribe(
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
      this.onUpdateCategory(this.id, this.categoryForm.value);
    } else {
      this.onAddCategory(this.categoryForm.value);
    }
  }

  onUpdateCategory(id: number, category: Category) {
    this.categoryService.updateCategory(id, category).subscribe(
      (data) => {
        this.isFetching = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onAddCategory(category: Category) {
    this.categoryService.addCategory(category).subscribe(
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
