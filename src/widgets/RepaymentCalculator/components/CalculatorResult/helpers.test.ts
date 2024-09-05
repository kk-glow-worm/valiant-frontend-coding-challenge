import { displayRepayment, numberWithCommas } from './helpers'
import { expect, describe, test } from 'vitest'

describe('CalculatorResult helpers', () => {
  test('numberWithCommas()', () => {
    expect(numberWithCommas(123)).toBe('123')
    expect(numberWithCommas(1234)).toBe('1,234')
    expect(numberWithCommas(1234.12)).toBe('1,234.12')
  })

  test('displayRepayment()', () => {
    expect(displayRepayment(-123)).toBe('$123')
    expect(displayRepayment(-123.45)).toBe('$123')
    expect(displayRepayment(-123.54)).toBe('$124')
    expect(displayRepayment(-1234.54)).toBe('$1,235')
  })
})
