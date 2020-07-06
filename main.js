"use strict";
// Transparent Navbar, Transparent Home, Arrow up button

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
const arrowUp = document.querySelector(".arrow-up");

const handleScroll = () => {
  const scrollHeight = window.scrollY;
  if (scrollHeight > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }

  const opacity = 1 - scrollHeight / homeHeight;
  home.style.opacity = opacity;

  if (scrollHeight > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
};

// Scroll to section
const navbarMenu = document.querySelector(".navbar__menu");
const homeContactBtn = document.querySelector(".home__contact");

const scrollIntoView = (selector) => {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
};

const handleClickToScroll = (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  } else {
    scrollIntoView(link);
  }
};

// Projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".w-project");

const handleClickToFilter = (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  projectContainer.classList.add("anim-out");

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
};

const init = () => {
  document.addEventListener("scroll", handleScroll);
  navbarMenu.addEventListener("click", handleClickToScroll);
  homeContactBtn.addEventListener("click", handleClickToScroll);
  arrowUp.addEventListener("click", handleClickToScroll);
  workBtnContainer.addEventListener("click", handleClickToFilter);
};

init();
