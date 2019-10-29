import { Injectable, Inject, OnInit } from '@angular/core';
import { Book } from './book.model';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Subject } from 'rxjs';
const local_key = 'bookList';

// @Injectable()
export class BookService implements OnInit {

    bookListUpdated = new Subject<Book[]>();
    localbooks: Book[];
    private books: Book[] = [
        new Book(
        "Chinua Achebe",
        "Nigeria",
        "../../../assets/things-fall-apart.jpg",
        "English",
        "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        209,
        "Things Fall Apart",
        1958),
        new Book(
        "Hans Christian Andersen",
        "Denmark",
        "../../../assets/fairy-tales.jpg",
        "Danish",
        "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        784,
        "Fairy tales",
        1836),
        new Book(
        "Dante Alighieri",
        "Italy",
        "../../../assets/the-divine-comedy.jpg",
         "Italian",
        "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        928,
        "The Divine Comedy",
        1315),
        new Book("Unknown",
        "Sumer and Akkadian Empire",
        "../../../assets/the-epic-of-gilgamesh.jpg",
        "Akkadian",
        "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        160,
        "The Epic Of Gilgamesh",
        1700),
        new Book(
        "Unknown",
        "Achaemenid Empire",
        "../../../assets/the-book-of-job.jpg",
        "Hebrew",
        "https://en.wikipedia.org/wiki/Book_of_Job\n",
        176,
        "The Book Of Job",
        600),
        new Book(
        "Unknown",
        "India/Iran/Iraq/Egypt/Tajikistan",
        "../../../assets/one-thousand-and-one-nights.jpg",
        "Arabic",
        "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
        288,
        "One Thousand and One Nights",
        1200),
        new Book(
            "Samuel Beckett",
            "Republic of Ireland",
            "../../../assets/molloy-malone-dies-the-unnamable.jpg",
            "French, English",
            "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
            256,
            "Molloy, Malone Dies, The Unnamable, the trilogy",
            1952
         ),
         new Book(
            "Jorge Luis Borges",
            "Argentina",
            "../../../assets/ficciones.jpg",
            "Spanish",
            "https://en.wikipedia.org/wiki/Ficciones\n",
            224,
            "Ficciones",
            1965
         ),
         new Book(
            "Emily Bront\u00eb",
            "United Kingdom",
            "../../../assets/wuthering-heights.jpg",
            "English",
            "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
            342,
            "Wuthering Heights",
            1847
         ),
         new Book(
            "Albert Camus",
            "Algeria, French Empire",
            "../../../assets/l-etranger.jpg",
            "French",
            "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
            185,
            "The Stranger",
            1942
         ),
         new Book(
            "Paul Celan",
            "Romania, France",
            "../../../assets/poems-paul-celan.jpg",
            "German",
            "\n",
            320,
            "Poems",
            1952
         )];

    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { 
    }

    ngOnInit() {
        
        //this.books=this.storage.get(local_key) || {};
        //this.bookListUpdated.next(this.books);
    }
    
    isEqual(book1:Book, book2:Book) {
        let aProps = Object.getOwnPropertyNames(book1);
        //let bProps = Object.getOwnPropertyNames(book2);
        //console.log(aProps);
        
        for (let i = 0; i < aProps.length; i++) {
            let propName = aProps[i];
            if (book1[propName] !== book2[propName]) {
                return false;
            }
        }
        return true;
    }

    getBooks(){
        console.log("localstorage init");
        const local = this.storage.get(local_key) ||{};
        if (local === {}){
            console.log('first call');
            this.storage.set(local_key, this.books);
        }
        this.books = this.storage.get(local_key) ||{};
        this.bookListUpdated.next(this.books);
        return this.books;
    }
    getBookImageLinks(){
        const imageLinks=[];
        this.books = this.storage.get(local_key)
        this.books.forEach(element => {
            imageLinks.push(element.imageLink);
        });
        return imageLinks;
    }
    addBook(book:Book){
        this.books=this.storage.get(local_key);
        this.books.push(book);
        this.bookListUpdated.next(this.books);
        this.storage.set(local_key, this.books);
    }
    deleteBook(book:Book){
        this.books=this.storage.get(local_key);
        console.log("book to delete", book);
        this.books=this.books.filter(b => {
            console.log(b,!this.isEqual(b,book));
            return !this.isEqual(b,book);
        })
        this.bookListUpdated.next(this.books);
        console.log(this.books);
        this.storage.set(local_key, this.books);
    }

}