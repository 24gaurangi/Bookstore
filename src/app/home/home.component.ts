import { Component, OnInit } from '@angular/core';
import { BookService } from '../books/book.service';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  images:string[];
  i:number=0;
  current:number=0;
  constructor(private bookService:BookService) {
   }

  ngOnInit() { 
    this.images=this.bookService.getBookImageLinks();
    this.i= this.images.length;
    console.log(this.images);
   }
  nextImage() {
    // console.log('c',i,current);
    if (this.current<this.i-3) {
      this.current+=1;
    }
    else {
      this.current=0;
    }

  }
  
  prevImage() {
    // console.log('c',i,current);
    if (this.current<this.i && this.current>0) {
      this.current-=1;
      // console.log('c',this.i,this.current);
    }
    else {
      this.current=this.i-3;
    }
    // var imageHolder = document.getElementById('imageHolder');
    // imageHolder.innerHTML = "<img src="+this.images[this.current]+">";
  }

}
