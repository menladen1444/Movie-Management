import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/model/category.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input() category!: Category;
  @Input() index: any;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

}
