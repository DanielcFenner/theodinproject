function createFooter() {
    const footerContainer = document.createElement("footer");
    const a = document.createElement("a");
    a.textContent = "made by @danielfennerdev";
    a.href = "https://www.danielfenner.dev";
    footerContainer.appendChild(a);

    return footerContainer;
}

export { createFooter };