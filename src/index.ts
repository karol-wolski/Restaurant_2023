import './index.css'
import { contactForm } from './ts/contact-form'
import { filterMenuCard, initialMenuCard } from './ts/menu-card'

const init = () => {
  initialMenuCard()
  filterMenuCard()
  contactForm()
}

init()
