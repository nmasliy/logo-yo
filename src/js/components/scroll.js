import SmoothScroll from 'smooth-scroll';

const scroll = new SmoothScroll('a[href*="#"]', {
  speedAsDuration: true,
  duration: 500,
  offset: document.querySelector('.header')?.offsetHeight
});
