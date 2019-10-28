import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../books/book.model';
import { BookService } from '../books/book.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit, OnDestroy {
  box:Boolean=false;
  addSuccess:String='';
  books: Book[];
  private booksUpdateSubscription:Subscription;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books=this.bookService.getBooks();
    this.booksUpdateSubscription = this.bookService.bookListUpdated.subscribe((updatedBooks:Book[]) => {
      this.books = updatedBooks;
    })
  }

  onAddBook(form:NgForm){
    const value = form.value;
    //console.log(value);
    const image="../../../assets/"+value.imageLink.split("fakepath\\")[1];
    const pages=0;
    const link = '';
    const year = 9999;
    const newBook = new Book(value.author,value.country,image,value.lang,link,pages,value.title,year);
    this.bookService.addBook(newBook);
    this.addSuccess="Book added successfully!";
    console.log('Added',newBook);
    
  }
  reset(form:NgForm){
    form.reset();
    this.addSuccess="";

  }
  onDeleteBook(book:Book){
    console.log(book);
    this.bookService.deleteBook(book);
    console.log('Deleted',book);
  }

  openModal(){
    console.log(this.box);
    this.box=true;
  }
  closeModal(){
    console.log('closed');
    this.box=false;
  }
  ngOnDestroy(){
    this.booksUpdateSubscription.unsubscribe();
  }
}
