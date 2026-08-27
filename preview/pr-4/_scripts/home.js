// _scripts/home.js

let slideIndex = 1, slideTimer;

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides"),
        dots   = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1)             { slideIndex = slides.length; }
    Array.from(slides).forEach(s => s.style.display = "none");
    Array.from(dots).forEach(d => d.className = d.className.replace(" active",""));
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function plusSlides(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex += n);
    slideTimer = setTimeout(() => plusSlides(1), 4000);
}

function currentSlide(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex = n);
    slideTimer = setTimeout(() => plusSlides(1), 4000);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
    slideTimer = setTimeout(() => plusSlides(1), 4000);
});