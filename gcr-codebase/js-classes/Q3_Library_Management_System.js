"use strict";

class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = String(isbn);
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`${this.title} is already issued.`);
            return;
        }

        this.isIssued = true;
        console.log(`${this.title} has been issued successfully.`);
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`${this.title} was not issued.`);
            return;
        }

        this.isIssued = false;
        console.log(`${this.title} has been returned.`);
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "101"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "102"),
    new Book("Atomic Habits", "James Clear", "103", true)
];

function displayAvailableBooks() {
    console.log("\nAvailable Books:");

    const availableBooks = books.filter(book => !book.isIssued);

    availableBooks.forEach(book => {
        console.log(
            `${book.title} | ${book.author} | ISBN: ${book.isbn}`
        );
    });
}

function issueBookByISBN(isbn) {
    const book = books.find(book => book.isbn === String(isbn));

    if (!book) {
        console.log("Book not found.");
        return;
    }

    book.issueBook();
}

displayAvailableBooks();

issueBookByISBN("101");

displayAvailableBooks();