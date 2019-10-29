import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.model';
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  //@Input() book:Book;
  book:Book;
  id:number;
  constructor(private route:ActivatedRoute, private bookservice:BookService) { }

  ngOnInit() {
    this.route.params.subscribe((p:Params) =>{
      this.id=+p['id'];
      console.log(this.id);  
      const allbooks = this.bookservice.getBooks();
      const b = allbooks[this.id];
      console.log('book',b);
      this.book = b;
    });
  }
}
