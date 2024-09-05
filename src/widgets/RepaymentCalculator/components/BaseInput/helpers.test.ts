import { expect, test } from 'vitest'
import { getValidationErrors } from './helpers'

test('getValidationErrors()', () => {
  const value = 'test'
  const errors = []
  const errorMsg = 'error'
  const validator = () => errorMsg
  const returnedErrors = getValidationErrors(value)(errors, validator)
  expect(errors.length).toBe(1)
  expect(errors[0]).toBe(errorMsg)
  expect(returnedErrors).toEqual(errors)
})
