export class Book{
    public author:string;
    public country:string;
    public imageLink?:string;
    public language:string;
    public link?:string;
    public pages?:number;
    public title:string;
    public year?:number;

    constructor(author:string, country:string, image:string, lang:string, link:string, 
        pages:number, title:string, year:number) {
        this.author = author;
        this.country = country;
        this.imageLink = image;
        this.language = lang;
        this.link = link;
        this.pages = pages;
        this.title = title;
        this.year = year;

    }
}
    // {
    //   "author": "Unknown",
    //   "country": "Sumer and Akkadian Empire",
    //   "imageLink": "images/the-epic-of-gilgamesh.jpg",
    //   "language": "Akkadian",
    //   "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    //   "pages": 160,
    //   "title": "The Epic Of Gilgamesh",
    //   "year": -1700
    // },
    // {
    //   "author": "Unknown",
    //   "country": "Achaemenid Empire",
    //   "imageLink": "images/the-book-of-job.jpg",
    //   "language": "Hebrew",
    //   "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
    //   "pages": 176,
    //   "title": "The Book Of Job",
    //   "year": -600
    // },
    // {
    //   "author": "Unknown",
    //   "country": "India/Iran/Iraq/Egypt/Tajikistan",
    //   "imageLink": "images/one-thousand-and-one-nights.jpg",
    //   "language": "Arabic",
    //   "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
    //   "pages": 288,
    //   "title": "One Thousand and One Nights",
    //   "year": 1200
    // }]