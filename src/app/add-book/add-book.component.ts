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
  imageLink:File;
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

  getFiles(event){ 
    this.imageLink = event.target.files; 
    console.log(this.imageLink);
  }

  onAddBook(form:NgForm){
    const value = form.value;
    const imageLink = this.imageLink? this.imageLink[0].name:"default.png";
    const image="../../../assets/"+ imageLink;
    console.log(image)
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
    console.log('click reset',form)
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
