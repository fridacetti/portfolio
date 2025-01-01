// BURGER
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

//SLIDESHOW
//slide1
// Initialiser slide-indekset
let slideIndex = 1;

// Vis det første slide
showSlides(slideIndex);

// Funktion til at skifte slide fremad eller baglæns
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Funktion til at vise det aktuelle slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide1"); // Skift til "slide1" for slideshow1

  // Hvis vi når forbi det sidste slide, gå tilbage til det første
  if (n > slides.length) {
    slideIndex = 1;
  }

  // Hvis vi går før det første slide, gå til det sidste
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Skjul alle slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Vis det aktuelle slide
  slides[slideIndex - 1].style.display = "block";
}

//slide2
// Initialiser separate slide-indeks for hvert slideshow
let slideIndex1 = 1;
let slideIndex2 = 1;

// Vis det første slide i begge slideshows
showSlides1(slideIndex1);
showSlides2(slideIndex2);

// Funktion til at ændre slide i slideshow 1
function plusSlides1(n) {
  showSlides1((slideIndex1 += n));
}

// Funktion til at ændre slide i slideshow 2
function plusSlides2(n) {
  showSlides2((slideIndex2 += n));
}

// Funktion til at vise det aktuelle slide i slideshow 1
function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("slide1"); // Henter slides til slideshow 1
  if (n > slides.length) {
    slideIndex1 = 1;
  } // Gå tilbage til første slide
  if (n < 1) {
    slideIndex1 = slides.length;
  } // Gå til sidste slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Skjul alle slides
  }
  slides[slideIndex1 - 1].style.display = "block"; // Vis aktuelt slide
}

// Funktion til at vise det aktuelle slide i slideshow 2
function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("slide2"); // Henter slides til slideshow 2
  if (n > slides.length) {
    slideIndex2 = 1;
  } // Gå tilbage til første slide
  if (n < 1) {
    slideIndex2 = slides.length;
  } // Gå til sidste slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Skjul alle slides
  }
  slides[slideIndex2 - 1].style.display = "block"; // Vis aktuelt slide
}
