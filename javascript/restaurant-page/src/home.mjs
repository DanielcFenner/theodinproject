function createHome() {
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("contentContainer");
    const title = document.createElement("h2");
    title.textContent = "The Finest Catnip";
    homeContainer.appendChild(title);
    const paragraph = document.createElement("p");
    paragraph.textContent = "Cats from around the world come to enjoy the most exquisite catnip. Grown by catnip enthusiasts who have 20 years experience growing the finest catnip. If you're a cat, come down today and enjoy expertly grown catnip with flavours such as Lemon catnip or our rare Persian catmint.";
    homeContainer.appendChild(paragraph);
    const img = document.createElement("img");
    img.src = "img/cat.jpg";
    homeContainer.appendChild(img);

    return homeContainer;
}

export { createHome };