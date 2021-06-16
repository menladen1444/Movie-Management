import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { MovieItemComponent } from './movie/movie-item/movie-item.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { ManageComponent } from './manage/manage.component';
import { ManageItemComponent } from './manage/manage-item/manage-item.component';
import { ManageListComponent } from './manage/manage-list/manage-list.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieService } from './model/movie.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NationComponent } from './manage/nation/nation.component';
import { CategoryComponent } from './manage/category/category.component';
import { NationService } from './model/nation.service';
import { CategoryService } from './model/category.service';
import { NationEditComponent } from './manage/nation/nation-edit/nation-edit.component';
import { NationItemComponent } from './manage/nation/nation-item/nation-item.component';
import { NationListComponent } from './manage/nation/nation-list/nation-list.component';
import { ManageDetailComponent } from './manage/manage-detail/manage-detail.component';
import { NationDetailComponent } from './manage/nation/nation-detail/nation-detail.component';
import { CategoryDetailComponent } from './manage/category/category-detail/category-detail.component';
import { CategoryItemComponent } from './manage/category/category-item/category-item.component';
import { CategoryListComponent } from './manage/category/category-list/category-list.component';
import { CategoryEditComponent } from './manage/category/category-edit/category-edit.component';
import { ManageCreateComponent } from './manage/manage-create/manage-create.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MovieComponent,
    MovieDetailComponent,
    MovieItemComponent,
    MovieListComponent,
    ManageComponent,
    ManageItemComponent,
    ManageListComponent,
    NationComponent,
    CategoryComponent,
    NationEditComponent,
    NationItemComponent,
    NationListComponent,
    ManageDetailComponent,
    NationDetailComponent,
    CategoryDetailComponent,
    CategoryItemComponent,
    CategoryListComponent,
    CategoryEditComponent,
    ManageCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [MovieService,NationService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
