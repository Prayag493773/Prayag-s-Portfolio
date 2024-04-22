const toggleButton = document.getElementById("nav-toggle");

function togglefunc() {
  const nav = document.getElementById("links");
  nav.classList.toggle("active");
  console.log("done");
}

let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");
const totalSlides = slides.length;

function showSlide(n) {
  slideIndex = (n + totalSlides) % totalSlides; // Ensure slideIndex wraps around
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex].style.display = "block";
}

function moveSlide(n) {
  showSlide((slideIndex += n));
}

function autoSlide() {
  moveSlide(1);
  setTimeout(autoSlide, 3000); // Change slide every 2 seconds (2000 milliseconds)
}

autoSlide(); // Start automatic sliding
