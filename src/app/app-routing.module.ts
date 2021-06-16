import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryDetailComponent } from './manage/category/category-detail/category-detail.component';
import { CategoryEditComponent } from './manage/category/category-edit/category-edit.component';
import { CategoryComponent } from './manage/category/category.component';
import { ManageCreateComponent } from './manage/manage-create/manage-create.component';
import { ManageDetailComponent } from './manage/manage-detail/manage-detail.component';
import { ManageListComponent } from './manage/manage-list/manage-list.component';
import { ManageComponent } from './manage/manage.component';
import { NationDetailComponent } from './manage/nation/nation-detail/nation-detail.component';
import { NationEditComponent } from './manage/nation/nation-edit/nation-edit.component';
import { NationComponent } from './manage/nation/nation.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/home-component', pathMatch: 'full' },
  { path: 'home-component', component: HomeComponent,children: [
            { path: ':id', component: MovieDetailComponent },
        ] },
  { path: 'manage-component', component: ManageComponent,children: [
    { path: 'movie', component: ManageListComponent,
      children:[
        { path: 'new', component: ManageCreateComponent },
        { path: ':id', component: ManageDetailComponent },
        { path: ':id/edit', component: ManageCreateComponent },
      ] 
    },
    { path: 'nation', component: NationComponent,
      children:[
        { path: 'new', component: NationEditComponent },
        { path: ':id', component: NationDetailComponent },
        { path: ':id/edit', component: NationEditComponent },
      ] 
    },
    { path: 'category', component: CategoryComponent ,
      children:[
        { path: 'new', component: CategoryEditComponent },
        { path: ':id', component: CategoryDetailComponent },
        { path: ':id/edit', component: CategoryEditComponent },
      ]
    },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }