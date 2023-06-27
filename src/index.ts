import './index.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import 'venobox/dist/venobox.min.css'
import VenoBox from 'venobox'
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
  new VenoBox({
    selector: '.venobox',
    spinner: 'flow',
  })
}

init()
