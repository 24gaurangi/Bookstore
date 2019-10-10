import { Injectable } from '@angular/core';
import { Book } from './book.model'

// @Injectable()
export class BookService {
    private books: Book[] = [new Book(
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
        1315)];

    getBooks(){
        return this.books;
    }
    addBook(book:Book){
        this.books.push(book);

    }
}