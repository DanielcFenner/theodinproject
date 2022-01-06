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

const bookimsupposedtoread = new Book("Think like a programmer", "V. Anton Spraul", 230, false);

console.log(bookimsupposedtoread.info())