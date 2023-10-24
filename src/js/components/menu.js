import '../functions/mobile-100vh-fix';
import '../functions/header-height';
import Menu from '../functions/Menu';

const menu = new Menu({
  menu: document.querySelector('.menu'),
  burger: document.querySelector('.burger'),
  overlay: document.querySelector('.menu-overlay'),
  navLinks: document.querySelectorAll('.nav li a'),
  burgerCaption: 'Открыть меню',
  burgerActiveCaption: 'Закрыть меню',
  transitionDelay: 400,
  breakpoint: 1200,
});
