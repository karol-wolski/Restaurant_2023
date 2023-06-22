import { REGEX } from './constants'

const isEmail = (str: string) => REGEX.EMAIL.test(str)
const isPhoneNo = (str: string) => REGEX.PHONE_NO.test(str)
const isLetters = (str: string) => REGEX.LETTERS.test(str)
const isRequired = (str: string) => !str

export { isEmail, isPhoneNo, isLetters, isRequired }
