import { alert } from './alert'
import { ALERT_TYPE, MESSAGES } from './constants'
import { isEmail, isLetters, isPhoneNo, isRequired } from './helpers'

const checkField = (inputId: string, required = false, onlyLetters = false) => {
  const input = document.getElementById(inputId)
  const { value, type } = input as HTMLInputElement
  const errorMsgContainer = input.nextElementSibling
  let message = ''

  if (required && isRequired(value)) message += MESSAGES.REQUIRED_ERR_MSG

  if (required || value) {
    if (onlyLetters && !isLetters(value)) message += MESSAGES.ONLY_LETTERS_ERR_MSG
    if (type === 'tel' && !isPhoneNo(value)) message += MESSAGES.PHONE_ERR_MSG
    if (type === 'email' && !isEmail(value)) message += MESSAGES.EMAIL_ERR_MSG
  }

  if (errorMsgContainer) errorMsgContainer.remove()

  if (message) {
    input.parentElement.append(alert(ALERT_TYPE.ERROR, message))
    return false
  }
  return true
}

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
