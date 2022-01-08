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
const formCancel = document.querySelector(".formCancel");


newBookBtn.addEventListener("click", () => {
    toggleForm();
})

formCancel.addEventListener("click", toggleForm);
formSubmit.addEventListener("click", addBookToLibrary);


function toggleForm() {
    if (!toggle) {
        form.style.display = "flex";
        newBookBtn.style.display = "none";
        toggle = !toggle;
    } else {
        form.style.display = "none";
        newBookBtn.style.display = "block";
        toggle = !toggle;
    }
}

function toggleReadButton() {

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
    readInput.checked = !readInput.checked;
    let newBook = new Book(titleInput.value, authorInput.value,
        pagesInput.value, readInput.checked);
    myLibrary.push(newBook);
    console.log(`${newBook} successfully added to myLibrary array`);
    toggleForm();
    renderBook(newBook);
    resetForm();
}

function renderBook(book) {
    // create card div
    let newDiv = document.createElement("div");
    newDiv.classList.add("card");
    // add remove button to card
    let removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "x";
    newDiv.appendChild(removeButton);

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
    newPages.textContent = `${book.pages} pages`;
    newDiv.appendChild(newPages);
    // add read or not to card
    let readText;
    let readClass;
    if (book.read) {
        readText = "Not read yet";
        readClass = "btnNotRead";
    } else {
        readText = "Finished reading";
        readClass = "btnRead";
    }
    let newRead = document.createElement("button");
    newRead.classList.add(readClass);
    newRead.textContent = `${readText}`;

    // logic for making the finished reading button toggle
    newRead.addEventListener("click", () => {
        if (book.read === true) {
            newRead.classList.remove("btnRead");
            newRead.classList.add("btnNotRead");
            newRead.textContent = "Not read yet";
            book.read = false;
            console.log("what?");
        } else {
            newRead.classList.remove("btnNotRead");
            newRead.classList.add("btnRead");
            newRead.textContent = "Finished reading";
            book.read = true;
        }
    });

    // remove button logic
    // find index of book in myLibrary

    removeButton.addEventListener("click", () => {
        // find index of book in myLibrary
        let bookIndex = myLibrary.findIndex((element) => {
            if (element === book) {
                return true;
            }
        });

        cardDiv.removeChild(newDiv);
        myLibrary.splice(bookIndex, 1);
    });

    newDiv.appendChild(newRead);
    // add card to cards
    cardDiv.appendChild(newDiv);
}

function renderLibrary(libraryArray) {
    libraryArray.forEach((book) => {
        renderBook(book)
    });
}

