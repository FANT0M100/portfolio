/* SHOW MENU */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav__toggle", "nav__menu");

/* ACTIVE AND REMOVE MENU */
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  //active link
  navLink.forEach((link) => link.classList.remove("active"));
  this.classList.add("active");

  //remove show menu
  const navMenu = document.getElementById("nav__menu");
  navMenu.classList.remove("show");
}

navLink.forEach((link) => link.addEventListener("click", linkAction));
