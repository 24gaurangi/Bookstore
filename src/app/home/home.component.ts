import { Component, OnInit, ElementRef } from '@angular/core';
import { BookService } from '../books/book.service';
import { Book } from '../books/book.model';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  images:string[];
  i:number=0;
  current:number=0;
  image:String;
  //selectedBook:Book;
  constructor(private bookService:BookService, private router:Router) {
   }

  ngOnInit() { 
    this.images=this.bookService.getBookImageLinks();
    this.i= this.images.length;
    console.log(this.images, this.i);
   }

   showDetails(e:any) {
     console.log(e);
    this.image=e.target.src.split('assets/')[1];
    const allbooks = this.bookService.getBooks();
    console.log(this.image)
    const selectedBook = allbooks.filter(b => {
    return b.imageLink.split('assets/')[1]===this.image});
    console.log();
    this.router.navigate(["books",allbooks.indexOf(selectedBook[0])]);

   }
  nextImage() {
      const next = this.images[0];
      this.images = this.images.slice(1,)
      this.images.push(next);
  }
  
  prevImage() {
    const prev = this.images[(this.i)-1];
    this.images = this.images.slice(0,this.i-1);
    this.images.unshift(prev);
     
    // if (this.current<this.i && this.current>0) {
    //   this.current-=1;
    //   // console.log('c',this.i,this.current);
    // }
    // else {
    //   this.current=this.i-3;
    // }
    // // var imageHolder = document.getElementById('imageHolder');
    // // imageHolder.innerHTML = "<img src="+this.images[this.current]+">";
  }

}
