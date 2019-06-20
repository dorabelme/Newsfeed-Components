
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
menu.style.left = "-400px";

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button") ;

const toggleMenu = function() {
  menu.classList.toggle("menu--open");
  // Toggle the "menu--open" class on your menu refence.  
  if (menu.classList.length > 1) TweenLite.to(menu, 1, { left: 0 });
  else TweenLite.to(menu, 1, { left: "-400px" });
};

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);

const page = document.querySelector(".articles");
page.addEventListener("click", () => {
  TweenLite.to(menu, 1, { left: "-400px" });
})

const addButton = document.createElement("li");
addButton.textContent = "Add New Article";
addButton.classList.add(".addArticle")
const list = document.querySelector(".menu ul");
list.appendChild(addButton);