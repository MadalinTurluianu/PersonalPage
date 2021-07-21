// ---------------------------------- NAVIGATION

const mobileNav = document.querySelector(".mobile-nav");
const navMenuBars = mobileNav.querySelector(".nav-menu__bars");
const navMenuBar = navMenuBars.querySelectorAll(".nav-menu__bar");
const navMenuOpen = mobileNav.querySelector(".nav-menu__open");
const navMenuLinks = navMenuOpen.querySelectorAll("a");
const backdrop = document.querySelector(".backdrop");

// Make the navigation menu open when we click on it

let mobileNavIsOpen = false;

const displayFlex =
  "display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex;";

navMenuBars.addEventListener("click", function () {
  if (!mobileNavIsOpen) {
    backdrop.classList.add("backdrop-active");
    backdrop.classList.remove("backdrop-inactive");
    this.style.display = "none";
    mobileNav.classList.add("nav-open");
    mobileNav.classList.remove("nav-close");
    navMenuOpen.style = displayFlex;
    mobileNavIsOpen = true;
  }
});

function closeMobileMenu() {
  backdrop.classList.remove("backdrop-active");
  backdrop.classList.add("backdrop-inactive");
  mobileNav.classList.remove("nav-open");
  mobileNav.classList.add("nav-close");
  navMenuOpen.style.display = "none";
  navMenuBars.style = displayFlex;
  mobileNavIsOpen = false;
}

for (let i = 0; i < navMenuLinks.length; i++) {
  navMenuLinks[i].addEventListener("click", closeMobileMenu);
}

backdrop.addEventListener("click", closeMobileMenu);

// ---------------------------------- ABOUT

const aboutImg = document.querySelector("#about img");

// Make the picture change in loop

const pictures = [
  "LA",
  "GrandCanyon",
  "SanFrancisco",
  "Sequoia",
  "Philadelphia",
  "NewYork",
];

function changeImage(img) {
  aboutImg.src = `./pictures/${img}.jpg`;
}

function changeImageLoop() {
  for (let i = 0; i < pictures.length; i++) {
    setTimeout(changeImage.bind(pictures[i]), i * 3000, pictures[i]);
  }
}

changeImageLoop();

setInterval(changeImageLoop, 18000);
