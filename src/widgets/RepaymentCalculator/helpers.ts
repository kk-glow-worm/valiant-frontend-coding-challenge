import { Payload } from './components/BaseSelect/helpers'
import { Period } from './stores/dataStore'
import { Validator } from './components/BaseInput/helpers'
/*************************************
 * helpers
 * ***********************************/
export const updateStore =
  (store) =>
  ({ name, value }: Payload) => {
    store[name] = value
  }

export const processAmountPayload = (value: string): Payload => ({
  name: 'amount',
  value,
})

export const isEmpty = (value) =>
  value === null || value === '' || value === undefined

export const isReady = ({ amount, purpose, period, term }) =>
  !isEmpty(amount) && !isEmpty(purpose) && !isEmpty(period) && !isEmpty(term)

export const periodLabel = (period: string, periods: Period[]) =>
  periods.find(({ value }) => String(value) === String(period))?.label

export const totalRepayment = (repayment, period, term) => {
  // calculate yearly repayment then divided by 52 weeks to calculate the weekly repayment
  const weeklyRepayment = (repayment * period) / 52
  // term is in months, times 12 to calculate num of years of the term
  // times 52 to calculate total weeks
  const totalWeeks = (term / 12) * 52
  return weeklyRepayment * totalWeeks
}

const space = ' '
export const restrictInputToDigitsOnly = (event) => {
  // space key is 32 -> disable
  // allow backspace to edit input
  // allow tab key to navigate
  if (
    (isNaN(event.key) || event.key === space) &&
    event.key !== 'Backspace' &&
    event.key !== 'Tab'
  ) {
    event.preventDefault()
  }
}

export const amountID = '@repayment-calculator/input/amount'
export const purposeID = '@repayment-calculator/select/purpose'
export const periodID = '@repayment-calculator/select/period'
export const termsID = '@repayment-calculator/select/terms'
/*************************************
 * helpers - validators
 * ***********************************/
export const minValidator: Validator = (value) =>
  parseInt(value) < 1000 ? 'Amount must be more than $1,000' : ''

export const maxValidator: Validator = (value) =>
  parseInt(value) > 2000000 ? 'Amount must be less than $20,000,000' : ''

export const invalidNumValidator: Validator = (value) =>
  isEmpty(value) ? 'Please use a valid amount' : ''
/*************************************
 * helpers - api
 * ***********************************/
const baseUrl = 'http://localhost:5001' // TODO: using 5001 instead of 5000 due to mac is using 5000
const purposeSubUrl = '/loan-purposes'
const periodsSubUrl = '/requested-repayment-periods'
const termsSubUrl = '/requested-term-months'
const targetUrl = (url: string) => `${baseUrl}${url}`
export const purposesUrl = targetUrl(purposeSubUrl)
export const periodsUrl = targetUrl(periodsSubUrl)
export const termsUrl = targetUrl(termsSubUrl)
