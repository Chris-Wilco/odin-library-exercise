const myLibrary = [];

const libraryDisplayContainer = document.getElementById(
    "library-display-container"
);
const addBookButton = document.getElementById("add-book-button");
const removeBookButton = document.getElementById("remove-book-button");
const viewLibraryButton = document.getElementById("view-library-button");

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createNewBookCard(book) {}
