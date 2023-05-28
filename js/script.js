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

/* scroll animation  */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* home scrol */
sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

/* about scrol */
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 200 });
sr.reveal(".about__text", { delay: 400 });

/* skills scrol */
sr.reveal(".skills_subtitle", {});
sr.reveal(".skills__text", { delay: 200 });
sr.reveal(".skills__img", { delay: 200 });
sr.reveal(".skills__data", { interval: 200 });

/* work scrol */
sr.reveal(".work__img", { delay: 200 });

/* contact scrol */
sr.reveal(".contact__input", { delay: 200 });
