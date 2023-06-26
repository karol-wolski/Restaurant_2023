import { alert } from './alert'
import { ALERT_TYPE, MESSAGES, REGEX } from './constants'

const isEmail = (str: string) => REGEX.EMAIL.test(str)
const isPhoneNo = (str: string) => REGEX.PHONE_NO.test(str)
const isLetters = (str: string) => REGEX.LETTERS.test(str)
const isRequired = (str: string) => !str

export const checkField = (inputId: string, required = false, onlyLetters = false) => {
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

export { isEmail, isPhoneNo, isLetters, isRequired }
