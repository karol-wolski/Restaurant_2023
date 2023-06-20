import { CARD_MENU_BTN_ACTIVE_CLASS, CARD_MENU_INITIAL_CATEGORY } from './constants'

const setBtnActiveClass = (dataFilter: string, activeClass: string) => {
  const setActiveClass = document.querySelector(`[data-filter="${dataFilter}"]`)
  if (!setActiveClass.classList.contains(activeClass)) setActiveClass.classList.add(activeClass)
}

const removeBtnActiveClass = (activeClass: string) => {
  const activeBtn = document.querySelector(`.${activeClass}`)
  if (activeBtn) activeBtn.classList.remove(activeClass)
}

const displayDishes = (category: string) => {
  const items = document.querySelectorAll('.menu-card__item')

  items.forEach(
    (galleryItem: HTMLDivElement) =>
      (galleryItem.style.display = galleryItem.classList.contains(category) ? 'grid' : 'none')
  )
}

const initialMenuCard = () => {
  setBtnActiveClass(CARD_MENU_INITIAL_CATEGORY, CARD_MENU_BTN_ACTIVE_CLASS)
  displayDishes(CARD_MENU_INITIAL_CATEGORY)
}

const filterMenuCard = () => {
  const filtersNav = document.querySelectorAll('.menu-card-nav__item button')

  filtersNav.forEach((item: HTMLButtonElement) => {
    item.addEventListener('click', () => {
      const category = item.dataset.filter || CARD_MENU_INITIAL_CATEGORY

      removeBtnActiveClass(CARD_MENU_BTN_ACTIVE_CLASS)
      setBtnActiveClass(category, CARD_MENU_BTN_ACTIVE_CLASS)
      displayDishes(category)
    })
  })
}

export { initialMenuCard, filterMenuCard }
