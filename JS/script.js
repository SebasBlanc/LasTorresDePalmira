$(document).ready(function () {
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() >30){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }

    });
});

let currentSlide = 0;
const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;


slidesContainer.style.width = `${100 * totalSlides}%`;
slides.forEach(slide => {
    slide.style.width = `${100 / totalSlides}%`;
});

function updateSlidePosition() {
  slidesContainer.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlidePosition();
});

document.querySelector(".prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
});

// Auto-slide every 4 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlidePosition();
}, 4000);
