const myLibrary = [];

const libraryCardContainer = document.getElementById("library-card-container");

const addBookButton = document.getElementById("add-book-button");
addBookButton.addEventListener("click", (e) => {
    createNewBookCardWrapper();
});

const removeBookButton = document.getElementById("remove-book-button");
const viewLibraryButton = document.getElementById("view-library-button");

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function createNewBook() {
    const bookTitle = prompt("Please enter the new book title:", "Book Title");
    const bookAuthor = prompt(
        "Please enter the new book author:",
        "Book Author"
    );
    const thisBook = new Book(bookTitle, bookAuthor);
    myLibrary.push(thisBook);

    return thisBook;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createNewBookCardWrapper() {
    const newBook = createNewBook();
    createNewBookCard(newBook);
}

function createNewBookCard(newBook) {
    const newBookCard = document.createElement("div");
    newBookCard.classList.add("book-card");
    newBookCard.classList.add("content-shadow");

    const newBookTitle = document.createElement("div");
    newBookCard.classList.add("book-title");

    const newBookAuthor = document.createElement("div");
    newBookCard.classList.add("book-author");

    const removeBookButton = document.createElement("div");
    removeBookButton.classList.add("remove-book-button");
    removeBookButton.classList.add("nav-link");
    removeBookButton.addEventListener("click", () => {
        console.log("yea you clicked it");
        removeBook(newBookCard);
    });
    removeBookButton.textContent = "Remove";

    newBookTitle.textContent = newBook.title;
    newBookAuthor.textContent = newBook.author;

    newBookCard.appendChild(newBookTitle);
    newBookCard.appendChild(newBookAuthor);
    newBookCard.appendChild(removeBookButton);
    libraryCardContainer.appendChild(newBookCard);
}

function populateLibraryCards() {
    myLibrary.forEach((e) => {
        createNewBookCard(e);
    });
}

function generateTempLibrary() {
    const titleList = [
        "The Hobbit",
        "The Fellowship of the Ring",
        "The Two Towers",
        "Return of the King",
    ];
    const authorList = [
        "JRR Tolkien",
        "JRR Tolkien",
        "JRR Tolkien",
        "JRR Tolkien",
    ];

    for (let i = 0; i < titleList.length; i++) {
        const newBook = new Book(titleList[i], authorList[i]);
        myLibrary.push(newBook);
    }
}

function removeBook(parentCard) {
    //const parentCard = e.parentElement;

    parentCard.parentElement.removeChild(parentCard);
}

generateTempLibrary();
populateLibraryCards();
