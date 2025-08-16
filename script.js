const reveals = document.querySelectorAll(".scroll-reveal");

const revealOnScroll = () => {
  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

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

var lat = 36.18399;
var lng = -115.95526;

var map = L.map("map").setView([lat, lng], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

var marker = L.marker([lat, lng]).addTo(map);

marker
  .bindPopup("<b>3190 S Hwy 160 Suite F</b><br>Pahrump, NV 89048")
  .openPopup();
