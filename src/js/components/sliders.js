import Swiper, { Navigation, Keyboard } from 'swiper';

Swiper.use([Navigation, Keyboard]);

const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  speed: 500,
  loop: true,
  keyboard: {
    enabled: true,
  },
  spaceBetween: 40,
  navigation: {
    nextEl: '.cards__button-next',
    prevEl: '.cards__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1201: {
      slidesPerView: 2,
      spaceBetween: 40
    },
  }
});

