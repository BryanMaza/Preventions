let click = false;
let navbar = document.querySelector(".nav");
let menu = document.querySelector(".nav__btn");
let menuItems = document.querySelectorAll("li");

const fixedNavbar = () => {
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
};

const handlerMenu = () => {
  if (click) {
    menu.classList.add("open");
    navbar.classList.add("active");
    menu.firstElementChild.className = "fas fa-times fa-2x";
  } else {
    menu.classList.remove("open");
    navbar.classList.remove("active");
    menu.firstElementChild.className = "fas fa-bars fa-2x";
  }
};

function addEvents() {
  if (document.readyState === "complete") {
    window.onscroll = function () {
      fixedNavbar();
    };
    menu.addEventListener("click", () => {
      click = !click;
      handlerMenu();
    });
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        for (const item of menuItems) {
          item.classList.remove("selected");
        }
        item.classList.add("selected");
      });
    });
  }
}

document.addEventListener("readystatechange", addEvents);
