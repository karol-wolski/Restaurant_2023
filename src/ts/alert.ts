import { ALERT_TYPE } from './constants'

export const alert = (type: ALERT_TYPE, str: string, hide = false) => {
  const el = document.createElement('div')
  el.classList.add('alert')

  if (type === ALERT_TYPE.ERROR) el.classList.add('alert--error')
  if (type === ALERT_TYPE.SUCCESS) el.classList.add('alert--success')

  if (hide) setTimeout(() => el.remove(), 3000)

  el.append(str)
  return el
}
