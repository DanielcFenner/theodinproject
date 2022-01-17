import { createHome } from './home.mjs';
import { createMenu } from './menu.mjs';
import { createContact } from './contact.mjs';
import { createFooter } from './footer.mjs';

// Assign container
const container = document.querySelector("#container");
const header = createHeader();
container.appendChild(header);
const home = createHome();
container.appendChild(home);
const menu = createMenu();
container.appendChild(menu);
const contact = createContact();
container.appendChild(contact);
const footer = createFooter();
container.appendChild(footer);
pageSelect("home");



// Create header and nav
function createHeader() {
    const header = document.createElement("header");
    const title = document.createElement("h1");
    title.innerText = "catnip cafe";
    const nav = document.createElement("nav");
    const buttonHome = document.createElement("button");
    buttonHome.innerText = "home";
    nav.appendChild(buttonHome);
    buttonHome.addEventListener("click", () => {
        pageSelect("home");
    });
    const buttonMenu = document.createElement("button");
    buttonMenu.textContent = "menu";
    nav.appendChild(buttonMenu);
    buttonMenu.addEventListener("click", () => {
        pageSelect("menu");
    });
    const buttonContact = document.createElement("button");
    buttonContact.textContent = "contact";
    nav.appendChild(buttonContact);
    buttonContact.addEventListener("click", () => {
        pageSelect("contact");
    });
    header.appendChild(title);
    header.appendChild(nav);

    return header;
}

function pageSelect(str) {
    switch (str) {
        case "home":
            home.style.display = "flex";
            menu.style.display = "none";
            contact.style.display = "none";
            console.log("home");
            break;
        case "menu":
            home.style.display = "none";
            menu.style.display = "flex";
            contact.style.display = "none";
            console.log("menu");
            break;
        case "contact":
            home.style.display = "none";
            menu.style.display = "none";
            contact.style.display = "flex";
            console.log("contact");
            break;
    }
}

createHeader();
