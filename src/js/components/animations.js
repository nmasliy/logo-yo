import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

window.addEventListener('scroll', function () {
  document.documentElement.style.setProperty(
    '--scrollTop',
    `${this.scrollY}px`
  );
});

initAnimations();

function initAnimations() {
  if (ScrollTrigger.isTouch) return;

  // Hero Animations
  gsap.to('.hero__info', {
    opacity: 0,
    x: -150,
    scrollTrigger: {
      trigger: '.hero__inner',
      start: 'top top',
      end: '+=100%',
      scrub: 1
    },
  });
  gsap.to('.hero__cards', {
    opacity: 0,
    x: 150,
    scrollTrigger: {
      trigger: '.hero__inner',
      start: 'top top',
      end: '+=100%',
      scrub: 1
    },
  });
  // End Hero Animations

  // Cars Animations
  gsap.from('.cars__title', {
    opacity: 0,
    y: 50,
    duration: 0.6,
    scrollTrigger: {
      trigger: '.cars__title',
      start: '150px bottom',
    },
  });

  gsap.from('.cars__line', {
    opacity: 0,
    x: '100%',
    duration: 0.4,
    scrollTrigger: {
      trigger: '.cars__list',
      start: '150px bottom',
    },
  });

  const carsItems = document.querySelectorAll('.cars__list li');

  for (let i = 0; i < carsItems.length; i++) {
    gsap.from(carsItems[i], {
      opacity: 0,
      x: 160,
      duration: 1,
      delay: (i + 3) / 5,
      scrollTrigger: {
        trigger: '.cars__list',
        start: '150px bottom',
      },
    });
  }

  const carsNum = document.querySelector('.cars__info-num span');
  const endValue = +carsNum.textContent;
  const startValue = 0;

  carsNum.textContent = startValue;

  const counter = {
    value: startValue,
  };

  gsap.to(counter, {
    value: endValue,
    duration: 1,
    delay: 1.4,
    onUpdate: () => {
      carsNum.textContent = Math.round(counter.value);
    },
    scrollTrigger: {
      trigger: '.cars__info',
      start: '150px bottom',
    },
  });
  // End Cars Animations

  // Cards Animations
  gsap.from('.cards__title', {
    opacity: 0,
    y: 50,
    duration: 0.6,
    scrollTrigger: {
      trigger: '.cards__title',
      start: '150px bottom',
    },
  });

  gsap.from('.cards__text', {
    opacity: 0,
    y: 50,
    duration: 0.6,
    delay: 0.3,
    scrollTrigger: {
      trigger: '.cards__text',
      start: '150px bottom',
    },
  });

  gsap.from('.cards__slider-wrapper', {
    opacity: 0,
    y: 50,
    duration: 0.6,
    delay: 0.7,
    scrollTrigger: {
      trigger: '.cards__slider-wrapper',
      start: '150px bottom',
    },
  });

  // End Cards Animations

  // Services Animations
  const servicesItems = document.querySelectorAll('.services__col');

  for (let i = 0; i < servicesItems.length; i++) {
    gsap.from(servicesItems[i], {
      opacity: 0,
      y: 160,
      duration: 1,
      delay: i / 5,
      scrollTrigger: {
        trigger: '.services__row',
        start: '150px bottom',
      },
    });
  }
  // End Services Animations

    // Footer Animations
    gsap.from('.footer__col:nth-child(1)', {
      opacity: 0,
      x: -150,
      scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom',
        end: '+=80%',
        scrub: 1
      },
    });
    gsap.from('.footer__col:nth-child(2)', {
      opacity: 0,
      x: 150,
      scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom',
        end: '+=80%',
        scrub: 1
      },
    });
    // End Footer Animations
}
