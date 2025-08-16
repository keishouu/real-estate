const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const mobileNavbar = document.querySelector(".mobile-navbar");

menuToggle.addEventListener("click", () => {
  mobileNavbar.classList.toggle("show");

  // toggle icon
  const icon = menuToggle.querySelector("i");
  if (mobileNavbar.classList.contains("show")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// close menu when clicking a link
document.querySelectorAll(".mobile-navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNavbar.classList.remove("show");
    menuToggle.querySelector("i").classList.remove("fa-times");
    menuToggle.querySelector("i").classList.add("fa-bars");
  });
});

let currentIndex = 0;
let thumbnails;

window.onload = function () {
  thumbnails = document.querySelectorAll(".column .row img");
  myFunction(thumbnails[currentIndex]);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    fadeToImage(thumbnails[currentIndex]);
  }, 3000);
};

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.alt = imgs.alt;
  currentIndex = Array.from(thumbnails).indexOf(imgs);
}

function fadeToImage(img) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.style.opacity = 0;
  setTimeout(() => {
    expandImg.src = img.src;
    expandImg.alt = img.alt;
    expandImg.style.opacity = 1;
  }, 400);
}
