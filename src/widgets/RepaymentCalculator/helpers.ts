import { Payload } from './components/Select/helpers'
import { Period } from './stores/dataStore'

export const updateStore =
  (store) =>
  ({ name, value }: Payload) => {
    store[name] = value
  }

export const processAmountPayload = ({
  // @ts-expect-error Event has target.value
  target: { value },
}: Event): Payload => ({
  name: 'amount',
  value,
})

export const isReady = (amount, purpose, period, term) =>
  amount !== null && purpose !== '' && period !== null && term !== null

export const periodLabel = (period, periods: Period[]) =>
  periods.find(({ value }) => String(value) === String(period))?.label

export const totalRepayment = (repayment, period, term) => {
  // calculate yearly repayment then divided by 52 weeks to calculate the weekly repayment
  const weeklyRepayment = (repayment * period) / 52
  // term is in months, times 12 to calculate num of years of the term
  // times 52 to calculate total weeks
  const totalWeeks = (term / 12) * 52
  return weeklyRepayment * totalWeeks
}

// export const displayRepayment = (repayment: number) => -Math.round(repayment)
const numberWithCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
export const displayRepayment = (repayment: number) =>
  `$${numberWithCommas(-Math.round(repayment))}`
