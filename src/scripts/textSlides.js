let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function updateCarousel() {
  const slideWidth = slides[0].offsetWidth;
  const newTransformValue = -1 * currentSlide * slideWidth;
  document.querySelector('.carousel-container').style.transform = `translateX(${newTransformValue}px)`;
}

setInterval(nextSlide, 2000);
