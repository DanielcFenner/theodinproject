function createMenu() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");
    menuContainer.appendChild(createMenuItem("🌱", "True Catnip", "The purest most authentic tasting catnip"));
    menuContainer.appendChild(createMenuItem("🍀", "Greek Catnip", "Some say it tastes like the delicious flavour of Poseidon's chiseled abs"));
    menuContainer.appendChild(createMenuItem("🌿", "Camphor Catnip", "Such overwhelming flavour, cats don't know how to describe it"));
    menuContainer.appendChild(createMenuItem("🥬", "Lemon Catnip", "If you like sour, this is the one for you. It'll make you throw up any hairball"));
    menuContainer.appendChild(createMenuItem("🍂", "Persian Catnip", "Try our most luxurious catnip, dug from the depths of ancient Persia this aged catnip is a delicacy only found at catnip cafe"));
    return menuContainer;
}

function createMenuItem(inputIcon, inputTitle, inputText) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");
    const cardIcon = document.createElement("i");
    cardIcon.textContent = inputIcon;
    cardContainer.appendChild(cardIcon);
    const cardTitle = document.createElement("h3");
    cardTitle.textContent = inputTitle;
    cardContainer.appendChild(cardTitle);
    const cardText = document.createElement("p");
    cardText.textContent = inputText;
    cardContainer.appendChild(cardText);

    return cardContainer;
}

export { createMenu, createMenuItem };