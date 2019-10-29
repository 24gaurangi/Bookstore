import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';

const appRoutes: Routes =[
  {path:'', redirectTo:'/books', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'books', component:BooksComponent, children:[
    {path:':id', component:BookDetailComponent}]},
  {path:'addbook', component:AddBookComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
