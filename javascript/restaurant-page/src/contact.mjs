function createContact() {
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contentContainer");
    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Contact Us";
    contactContainer.appendChild(contactTitle);
    const contactText = document.createElement("p");
    contactText.textContent = "Meow at your human owner until they bring you down to catnip cafe or get them to call 1-800-catnipcafe";
    contactContainer.appendChild(contactText);


    return contactContainer;
}

export { createContact };