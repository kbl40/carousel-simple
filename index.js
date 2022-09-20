const slides = document.getElementsByClassName('carousel-item');
const dots = document.getElementsByClassName('carousel-dot')
const title = document.getElementById('title-text')
let slidePosition = 0;
const totalSlides = slides.length;
const movieTitles = ['Joker', 'Baby Driver', 'Parasite']

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function lightModeAllDots() {
    for (let dot of dots) {
        dot.classList.remove('dark')
        dot.classList.add('light')
    }
}

function moveToNextSlide() {
    hideAllSlides();
    lightModeAllDots()
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    dots[slidePosition].classList.remove("light")
    dots[slidePosition].classList.add("dark")
    title.innerHTML = movieTitles[slidePosition]
}

function moveToPrevSlide() {
    hideAllSlides();
    lightModeAllDots()
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    dots[slidePosition].classList.remove("light")
    dots[slidePosition].classList.add("dark")
    title.innerHTML = movieTitles[slidePosition]
}