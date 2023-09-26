let navToggle = document.querySelector('.navToggle');
let nav = document.querySelector('.header__nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('header__nav-show');
})

const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
  });
  