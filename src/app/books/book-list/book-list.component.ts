import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  searchbook: string ='';
  @Output() wasBookSelected = new EventEmitter<Book>();
  constructor(private bookService: BookService) { }
   

  ngOnInit() {
    console.log("book list init")
    this.books = this.bookService.getBooks();
  }
  onBookSelected(book:Book) {
    this.wasBookSelected.emit(book);
    console.log('event emitted',book);
  }
}

