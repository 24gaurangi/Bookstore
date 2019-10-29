import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book:Book;
  @Input() index:number;
  //@Output() bookSelected= new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  // onSelected(){
  //   this.bookSelected.emit();
  // }
}



  


