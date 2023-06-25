import './index.css'
import { BookTableForm, toggleBookTableModal } from './ts/book-table'
import { contactForm } from './ts/contact-form'
import { filterMenuCard, initialMenuCard } from './ts/menu-card'
import { mobileMenu } from './ts/mobile-menu'

const init = () => {
  mobileMenu()
  initialMenuCard()
  filterMenuCard()
  contactForm()
  toggleBookTableModal()
  BookTableForm()
}

init()
