import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { Book } from '../books/book.model';
import { BookService } from '../books/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books=this.bookService.getBooks();
  }

  onAddItem(form:NgForm){
    const value = form.value;
    const image = '';
    const link='';
    const pages=0;
    const year = 9999;
    const newBook = new Book(value.author,value.country,image,value.lang,link,pages,value.title,year);
    this.bookService.addBook(newBook);
    this.bookService.activatedEmitter.next(newBook);
    console.log('Added',newBook);
    form.reset();
  }

}
