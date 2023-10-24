const cards = document.querySelectorAll('.card--hover')

cards.forEach(card => {
  card.addEventListener('click', (e) => {
    if (window.innerWidth <= 1200) {
      card.classList.toggle('is-active');
    }
  })
})
