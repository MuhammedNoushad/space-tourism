const navListWrapper = document.getElementById("nav-list-wrapper");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("nav-close");

// to show the nav list when the menu icon is clicked
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("hide");
  navListWrapper.classList.toggle("drawer-open");
});

// to close the nav list when the close icon is clicked
closeIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("hide");
  navListWrapper.classList.toggle("drawer-open");
});
