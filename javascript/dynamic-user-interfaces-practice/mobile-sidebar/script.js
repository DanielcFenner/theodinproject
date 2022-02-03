const sidebarButton = document.querySelector("#sidebar-button");

sidebarButton.onclick = () => {
  const nav = document.querySelector("nav");
  const navStyle = getComputedStyle(nav);
  if (navStyle.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
};
