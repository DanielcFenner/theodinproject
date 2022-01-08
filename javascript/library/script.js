let myLibrary = [];
let toggle = false;
const cardDiv = document.querySelector(".cards");

const form = document.querySelector(".bookForm");
const titleInput = document.querySelector("#title")
const authorInput = document.querySelector("#author")
const pagesInput = document.querySelector("#pages")
const readInput = document.querySelector("#read")
const newBookBtn = document.querySelector(".newBook");
const formSubmit = document.querySelector(".formSubmit")

newBookBtn.addEventListener("click", () => {
    toggleForm();
})

formSubmit.addEventListener("click", addBookToLibrary);


function toggleForm() {
    if (!toggle) {
        form.style.display = "flex";
        newBookBtn.style.display = "none";
        toggle = !toggle;
    } else {
        form.style.display = "none";
        newBookBtn.style.display = "flex";
        toggle = !toggle;
    }
}


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function resetForm() {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;
}

function addBookToLibrary() {
    let newBook = new Book(titleInput.value, authorInput.value,
        pagesInput.value, readInput.value);
    myLibrary.unshift(newBook);
    console.log(`${newBook} successfully added to myLibrary array`);
    toggleForm();
    renderBook(newBook);
    resetForm();
}

function renderBook(book) {
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
}

function renderLibrary(libraryArray) {
    libraryArray.forEach((book) => {
        renderBook(book)
    });
}

// addBookToLibrary("Vampires", "Anne Rice", 365, false);
// addBookToLibrary("Spiderman", "Marvel Guy", 362, true);
// addBookToLibrary("Barney The Dinosaur", "Who Knows", 15, true);
// renderLibrary(myLibrary.reverse());
// renderLibrary(myLibrary.reverse());
// renderLibrary(myLibrary);
// renderLibrary(myLibrary.reverse());
// renderLibrary(myLibrary);
// renderLibrary(myLibrary.reverse());
// renderLibrary(myLibrary.reverse());
// renderLibrary(myLibrary.reverse());