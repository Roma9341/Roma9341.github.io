var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
var slider = document.querySelectorAll('#slider .slide1');
var currentSlide1 = 0;
var slideInterval = setInterval(nextSlide1,500);

function nextSlide1(){
    slider[currentSlide1].className = 'slide1';
    currentSlide1 = (currentSlide1+1)%slider.length;
    slider[currentSlide1].className = 'slide1 showing1';
}