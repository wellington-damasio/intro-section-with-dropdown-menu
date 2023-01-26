const navbar = document.querySelector('.nav__list')
const layover = document.querySelector('.layover')
const mobileNavToggler = document.querySelector('.mobile-menu-toggle')
const closeButton = document.querySelector('.btn-close')

mobileNavToggler.addEventListener('click', () => {
  navbar.classList.toggle('nav__list--show')
  layover.classList.toggle('layover--show')
})

closeButton.addEventListener('click', () => {
  navbar.classList.remove('nav__list--show')
  layover.classList.remove('layover--show')
})