export const CARD_MENU_BTN_ACTIVE_CLASS = 'btn__text--active'
export const CARD_MENU_INITIAL_CATEGORY = 'starter'

export const MESSAGES = {
  REQUIRED_ERR_MSG: 'Field is required.',
  ONLY_LETTERS_ERR_MSG: 'Field should have only letters.',
  PHONE_ERR_MSG: 'Field should have format: 500100500.',
  EMAIL_ERR_MSG: 'Field should have format: john@doe.com.',
  SUCCESSFULLY_SEND_MSG: 'Your e-mail has been successfully sent.',
}

export const REGEX = {
  EMAIL:
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PHONE_NO: /^\d{9}$/,
  LETTERS: /^[A-Za-z]+$/,
}

export enum ALERT_TYPE {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
