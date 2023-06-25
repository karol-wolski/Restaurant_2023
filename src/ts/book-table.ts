import { createFocusTrap } from 'focus-trap'
import { alert } from './alert'
import { ALERT_TYPE, MESSAGES } from './constants'
import { checkField } from './helpers'

export const toggleBookTableModal = () => {
  const openBtn = document.querySelector('#book-table')
  const closeBtn = document.querySelector('#close-book-table-btn')
  const modal = document.querySelector('#book-table-modal')

  const focusTrap = createFocusTrap('#book-table-modal', {
    onActivate: () => modal.classList.add('is-active'),
    onDeactivate: () => modal.classList.remove('is-active'),
  })

  openBtn.addEventListener('click', () => {
    modal.classList.add('book-table--open')
    focusTrap.activate()
  })

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('book-table--open')
    focusTrap.deactivate()
  })
}

export const BookTableForm = () => {
  const name = document.querySelector('#reservation-name')
  const telephone = document.querySelector('#reservation-phone')
  const email = document.querySelector('#reservation-email')
  const date = document.querySelector('#reservation-date')
  const time = document.querySelector('#reservation-time')
  const seats = document.querySelector('#reservation-seats')
  const message = document.querySelector('#special-requests')
  const form = document.querySelector('#book-table-form')

  name.addEventListener('focusout', () => checkField('reservation-name', true, true))
  telephone.addEventListener('focusout', () => checkField('reservation-phone', true, false))
  email.addEventListener('focusout', () => checkField('reservation-email', false, false))
  message.addEventListener('focusout', () => checkField('special-requests', false, false))
  date.addEventListener('focusout', () => checkField('reservation-date', true, false))
  time.addEventListener('focusout', () => checkField('reservation-time', true, false))
  seats.addEventListener('focusout', () => checkField('reservation-seats', true, false))

  form.addEventListener('submit', e => contactFormSubmit(e))
}

const contactFormSubmit = (e: any) => {
  e.preventDefault()

  const isValidName = checkField('reservation-name', true, true)
  const isValidPhone = checkField('reservation-phone', true, false)
  const isValidEmail = checkField('reservation-email', false, false)
  const isValidDate = checkField('reservation-date', true, false)
  const isValidTime = checkField('reservation-time', true, false)
  const isValidSeats = checkField('reservation-seats', true, false)
  const isValidMessage = checkField('special-requests', false, false)
  const isValidFields =
    isValidName && isValidPhone && isValidEmail && isValidMessage && isValidDate && isValidTime && isValidSeats

  if (isValidFields) {
    e.target.reset()
    e.target.append(alert(ALERT_TYPE.SUCCESS, MESSAGES.SUCCESSFULLY_SEND_MSG, true))
    toggleBookTableModal()
  }
}
