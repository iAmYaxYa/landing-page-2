const navbarLinks = document.querySelector(".navbar .links");
const toggleMenuBtn = document.querySelector(".navbar .toggle-menu-btn");
const toggleMenuIcon = document.querySelector(".navbar .toggle-menu-btn i");
const navbar = document.querySelector(".navbar");
const navbarLinkItems = document.querySelectorAll(".navbar .links li a");

// TOGGLE LINKS
const toggleLinks = () => {
  navbarLinks.classList.toggle("show");
  toggleMenuIcon.classList.toggle("fa-xmark");
};

toggleMenuBtn.addEventListener("click", toggleLinks);

// NAVBAR LINK ITEMS
navbarLinkItems.forEach((link) => {
  link.addEventListener("click", toggleLinks);
});
// WINDOW SCROLL
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("active-bg");
    return;
  }
  navbar.classList.remove("active-bg");
});
// INITIALIZE AOS
AOS.init();
