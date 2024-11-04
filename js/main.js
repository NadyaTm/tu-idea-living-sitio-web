/*=============== MOSTRAR MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/* Slider Home y servicios Desktop */

let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 5000);


/* Slider Home movil */
let indexOf = 0;
const homeSliderMovil = document.querySelector('.homeSliderMovil');
const totalhomeSliderMovil = document.querySelectorAll('.homeSliderMovil img').length;

function showNexthomeSliderMovil() {
    indexOf = (indexOf + 1) % totalhomeSliderMovil;
    homeSliderMovil.style.transform = `translateX(-${indexOf * 100}%)`;
}

setInterval(showNexthomeSliderMovil, 5000);


/* Catalogo hover cambio img */

function Cambiar(imagen){
    document.getElementById(imagen).src = 'otraimg.png';
}
