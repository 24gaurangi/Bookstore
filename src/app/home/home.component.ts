import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  images:string[]=['../../assets/fairy-tales.jpg','../../assets/one-thousand-and-one-nights.jpg',
  '../../assets/the-divine-comedy.jpg','../../assets/things-fall-apart.jpg'];
  i = this.images.length;
  current=0;
  constructor() {
   }

  ngOnInit() {  }
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
  }

}
