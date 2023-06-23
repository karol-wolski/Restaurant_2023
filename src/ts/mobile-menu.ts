const menu = () => {
  const hamburger = document.querySelector('#menu-toggle')
  const menu = document.querySelector('#nav')
  const menuItems = document.querySelectorAll('.nav__link')
  hamburger.classList.toggle('hamburger--active')
  menu.classList.toggle('nav--active')
  menuItems.forEach(element => {
    element.addEventListener('click', function () {
      menu.classList.remove('nav--active')
      hamburger.classList.remove('hamburger--active')
    })
  })
}

export const mobileMenu = () => {
  const hamburger = document.querySelector('#menu-toggle')
  hamburger.addEventListener('click', menu)
}
