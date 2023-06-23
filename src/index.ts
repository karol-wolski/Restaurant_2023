import './index.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
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

  AOS.init({
    once: false,
  })
}

init()
