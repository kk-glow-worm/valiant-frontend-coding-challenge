const numberWithCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const displayRepayment = (repayment: number) =>
  `$${numberWithCommas(-Math.round(repayment))}`

export const testID = 'calculator-result'

// export for testing
export { numberWithCommas }
