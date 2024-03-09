const myLibrary = [];

const libraryCardContainer = document.getElementById("library-card-container");

const addBookButton = document.getElementById("add-book-button");
addBookButton.addEventListener("click", (e) => {
    toggleDialog();
});

//changed a thing

const removeBookButton = document.getElementById("remove-book-button");
const viewLibraryButton = document.getElementById("view-library-button");

function Book(
    title,
    author,
    pageCount = "0",
    hasBookBeenRead = false,
    bookIndex
) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.hasBookBeenRead = hasBookBeenRead;
    this.bookIndex = bookIndex;

    function toggleHasBeenRead() {
        hasBookBeenRead ? (hasBookBeenRead = false) : (hasBookBeenRead = true);
    }
}

function createNewBook() {
    const bookTitle = prompt("Please enter the new book title:", "Book Title");
    const bookAuthor = prompt(
        "Please enter the new book author:",
        "Book Author"
    );
    const thisBook = new Book(bookTitle, bookAuthor, "69", true);
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

    const newBookPageCount = document.createElement("div");
    newBookPageCount.classList.add("page-count");

    const newBookRead = document.createElement("div");
    newBookRead.classList.add("has-been-read");

    const removeBookButton = document.createElement("div");
    removeBookButton.classList.add("remove-book-button");
    removeBookButton.classList.add("nav-link");
    removeBookButton.addEventListener("click", () => {
        console.log("yea you clicked it");
        removeBook(newBookCard);
    });
    removeBookButton.textContent = "Remove";

    const changeReadStatusButton = document.createElement("div");
    changeReadStatusButton.classList.add("change-read-status-button");
    changeReadStatusButton.classList.add("nav-link");
    changeReadStatusButton.addEventListener("click", () => {
        newBook.hasBookBeenRead
            ? (newBook.hasBookBeenRead = false)
            : (newBook.hasBookBeenRead = true);

        newBookRead.textContent = "Read: " + newBook.hasBookBeenRead;
    });
    changeReadStatusButton.textContent = "Change Read Status";

    newBookTitle.textContent = "Title: " + newBook.title;
    newBookAuthor.textContent = "Author: " + newBook.author;
    newBookPageCount.textContent = "Page Count: " + newBook.pageCount;
    newBookRead.textContent = "Read: " + newBook.hasBookBeenRead;

    newBookCard.appendChild(newBookTitle);
    newBookCard.appendChild(newBookAuthor);
    newBookCard.appendChild(newBookPageCount);
    newBookCard.appendChild(newBookRead);
    newBookCard.appendChild(removeBookButton);
    newBookCard.appendChild(changeReadStatusButton);
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

    const pageCountList = ["1000", "1000", "1000", "1000"];

    const hasBeenReadList = [true, true, true, true];

    for (let i = 0; i < titleList.length; i++) {
        const newBook = new Book(
            titleList[i],
            authorList[i],
            pageCountList[i],
            hasBeenReadList[i],
            myLibrary.length
        );
        myLibrary.push(newBook);
    }
}

function removeBook(parentCard) {
    parentCard.parentElement.removeChild(parentCard);
}

const toggleDialog = () => {
    const dialog = document.getElementById("add-book-dialog");
    const open = dialog.getAttribute("open");
    if (open) {
        dialog.removeAttribute("open");
    } else {
        dialog.setAttribute("open", "true");
    }
};

generateTempLibrary();
populateLibraryCards();
