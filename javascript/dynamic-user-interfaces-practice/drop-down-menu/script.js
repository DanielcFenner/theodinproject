const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("mouseover", (e) => {
    const menuItems = dropdown.querySelectorAll("button");
    console.log(menuItems);
    for (let i = 1; i < menuItems.length; i++) {
      const menuItem = menuItems[i];
      menuItem.style.display = "flex";
    }
  });

  dropdown.addEventListener("mouseout", (e) => {
    const menuItems = dropdown.querySelectorAll("button");
    console.log(menuItems);
    for (let i = 1; i < menuItems.length; i++) {
      const menuItem = menuItems[i];
      menuItem.style.display = "none";
    }
  });
});
