let myLibrary = [];

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

addBookToLibrary("Vampires", "Anne Rice", 365, false);
addBookToLibrary("Spiderman", "Marvel Guy", 362, true);
addBookToLibrary("Barney The Dinosaur", "Who Knows", 15, true);

