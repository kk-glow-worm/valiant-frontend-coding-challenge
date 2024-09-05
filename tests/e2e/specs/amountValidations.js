import { classes } from '@/widgets/RepaymentCalculator/components/BaseInput/helpers.ts'
import { amountInput, calculatorResult, goToApp } from './helpers.js'
/*************************************
 * helpers
 * ***********************************/
const inputHasNoError = () => {
  amountInput().invoke('attr', 'class').should('eq', classes.input)
}

const inputHasError = () => {
  amountInput()
    .invoke('attr', 'class')
    .should('eq', `${classes.input} ${classes.error}`)
}

const calculatorResultIsHidden = () => {
  calculatorResult().should('have.css', 'display', 'none')
}
/*************************************
 * test suite
 * ***********************************/
beforeEach(() => {
  goToApp()
  inputHasNoError()
  calculatorResultIsHidden()
})
afterEach(() => {
  inputHasError()
  calculatorResultIsHidden()
})
describe('Amount validations', () => {
  it('shows correct error when amount is less than $1,000', () => {
    cy.get('#app').should('not.contain', 'Amount must be more than $1,000')
    amountInput().type('123')
    amountInput().blur()
    cy.get('#app').contains('Amount must be more than $1,000')
  })

  it('shows correct error when amount is more than $20,000,000', () => {
    amountInput().type('20000001')
    amountInput().blur()
    cy.get('#app').contains('Amount must be less than $20,000,000')
  })

  it('shows correct error when amount is valid', () => {
    amountInput().focus()
    amountInput().blur()
    cy.get('#app').contains('Please use a valid amount')
  })

  it('rejects non digit inputs', () => {
    amountInput().type('qwertyuiop[]|asdfghjkl;zxcvbnm,./ ')
    amountInput().blur()
    amountInput().should('have.value', '')
  })
})
