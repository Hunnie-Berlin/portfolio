"use strict";
// Transparent Navbar
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

const handleScroll = () => {
  const scrollHeight = window.scrollY;
  if (scrollHeight > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
};

// Scroll to section
const navbarMenu = document.querySelector(".navbar__menu");
const homeContactBtn = document.querySelector(".home__contact");

const scrollIntoView = (selector) => {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
};

const handleClick = (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  } else {
    scrollIntoView(link);
  }
};

const init = () => {
  document.addEventListener("scroll", handleScroll);
  navbarMenu.addEventListener("click", handleClick);
  homeContactBtn.addEventListener("click", handleClick);
};

init();
