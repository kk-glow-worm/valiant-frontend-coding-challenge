import { testID } from '@/widgets/RepaymentCalculator/components/CalculatorResult/helpers.ts'

export const goToApp = () => {
  cy.visit('http://localhost:5173/')
}

export const amountInput = () => cy.get('input')
export const calculatorResult = () => cy.get(`[data-testid=${testID}]`)
