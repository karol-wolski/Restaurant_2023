import { alert } from './alert'
import { ALERT_TYPE, MESSAGES } from './constants'
import { checkField } from './helpers'

export const contactForm = () => {
  const name = document.querySelector('#name')
  const telephone = document.querySelector('#telephone')
  const email = document.querySelector('#email')
  const message = document.querySelector('#message')
  const form = document.querySelector('#contact-form')

  name.addEventListener('focusout', () => checkField('name', true, true))
  telephone.addEventListener('focusout', () => checkField('telephone', true, false))
  email.addEventListener('focusout', () => checkField('email', true, false))
  message.addEventListener('focusout', () => checkField('message', true, false))

  form.addEventListener('submit', e => contactFormSubmit(e))
}

const contactFormSubmit = (e: any) => {
  e.preventDefault()

  const isValidName = checkField('name', true, true)
  const isValidPhone = checkField('telephone', true, false)
  const isValidEmail = checkField('email', true, false)
  const isValidMessage = checkField('message', true, false)
  const isValidFields = isValidName && isValidPhone && isValidEmail && isValidMessage

  if (isValidFields) {
    e.target.reset()
    e.target.append(alert(ALERT_TYPE.SUCCESS, MESSAGES.SUCCESSFULLY_SEND_MSG, true))
  }
}
