import {
  periodID,
  purposeID,
  termID,
} from '@/widgets/RepaymentCalculator/helpers.ts'
import { amountInput, calculatorResult, goToApp } from './helpers.js'
/*************************************
 * helpers
 * ***********************************/
const typeInputs = () => {
  goToApp()
  amountInput().type('1234')
  cy.get(`#${purposeID}`).select('Day-to-day capital')
  cy.get(`#${periodID}`).select('Weekly')
  cy.get(`#${termID}`).select('6 months')
}
/*************************************
 * test suite
 * ***********************************/
describe('Happy path', () => {
  it('shows repayment', () => {
    typeInputs()
    calculatorResult().contains('Weekly repayment: $49')
    calculatorResult().contains('Total repayment: $1,266')
  })
  it('updates repayment result correctly', () => {
    typeInputs()
    // update purpose
    cy.get(`#${purposeID}`).select('Vehicle or transport')
    calculatorResult().contains('Weekly repayment: $48')
    calculatorResult().contains('Total repayment: $1,248')

    // update period
    cy.get(`#${periodID}`).select('Fortnightly')
    calculatorResult().contains('Fortnightly repayment: $96')
    calculatorResult().contains('Total repayment: $1,249')

    // update term
    cy.get(`#${termID}`).select('12 months')
    calculatorResult().contains('Fortnightly repayment: $49')
    calculatorResult().contains('Total repayment: $1,263')
  })
})
