
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button") ;

const toggleMenu = function() {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle("menu--open");
  if (menu.classList.length > 1) TweenLite.to(menu, 1, { left: 0 });
  else TweenLite.to(menu, 1, { left: "-300px" });
};

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);

const page = document.querySelector(".articles");
page.addEventListener("click", () => {
  TweenLite.to(menu, 1, { left: "-300px" });
})
