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
        "Halld Laxness",
        "Iceland",
        "../../../assets/independent-people.jpg",
         "Icelandic",
        "https://en.wikipedia.org/wiki/Independent_People\n",
        928,
        "Independent People",
        1315),
        new Book("Jonathan Swift",
        "Ireland",
        "../../../assets/gullivers-travels.jpg",
        "English",
        "https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n",
        178,
        "Gulliver's Travels",
        1726),
        new Book(
            "William Shakespeare",
            "England",
            "../../../assets/hamlet.jpg",
            "English",
            "https://en.wikipedia.org/wiki/Hamlet\n",
            432,
            "Hamlet",
            1603),
        new Book(
     "Salman Rushdie",
     "United Kingdom, India",
     "../../../assets/midnights-children.jpg",
     "English",
     "https://en.wikipedia.org/wiki/Midnight%27s_Children\n",
     536,
     "Midnight's Children",
     1981),
        new Book(
        "Leo Tolstoy",
        "Russia",
        "../../../assets/war-and-peace.jpg",
        "Russian",
        "https://en.wikipedia.org/wiki/War_and_Peace\n",
        1296,
        "War and Peace",
        1867),
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
        if (!Object.keys(local).length){
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