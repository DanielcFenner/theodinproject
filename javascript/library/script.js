let myLibrary = [];
const cardDiv = document.querySelector(".cards");


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    let readInfo = "";
    if (this.read) {
        readInfo = "has been read";
    } else {
        readInfo = "not read yet";
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readInfo}`;
}

function addBookToLibrary(title, author, pages, read) {
    let new_book = new Book(title, author, pages, read);
    myLibrary.push(new_book);
    console.log(`${new_book} successfully added to myLibrary array`);
}

function renderLibrary(libraryArray) {
    libraryArray.forEach((book) => {
        // create card div
        let newDiv = document.createElement("div");
        newDiv.classList.add("card");
        // add book title to card
        let newTitle = document.createElement("h2");
        newTitle.textContent = `${book.title}`;
        newDiv.appendChild(newTitle);
        // add author to card
        let newAuthor = document.createElement("p");
        newAuthor.textContent = `${book.author}`;
        newDiv.appendChild(newAuthor);
        // add pages to card
        let newPages = document.createElement("p");
        newPages.textContent = `Pages ${book.pages}`;
        newDiv.appendChild(newPages);
        // add read or not to card
        let readText;
        if (book.read) {
            readText = "Finished reading";
        } else {
            readText = "Not read yet";
        }
        let newRead = document.createElement("p");
        newRead.textContent = `${readText}`;
        newDiv.appendChild(newRead)
        // add card to cards
        cardDiv.appendChild(newDiv);
    });
}

addBookToLibrary("Vampires", "Anne Rice", 365, false);
addBookToLibrary("Spiderman", "Marvel Guy", 362, true);
addBookToLibrary("Barney The Dinosaur", "Who Knows", 15, true);
renderLibrary(myLibrary.reverse());
renderLibrary(myLibrary.reverse());
renderLibrary(myLibrary);
renderLibrary(myLibrary.reverse());
renderLibrary(myLibrary);
renderLibrary(myLibrary.reverse());
renderLibrary(myLibrary.reverse());
renderLibrary(myLibrary.reverse());