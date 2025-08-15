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
