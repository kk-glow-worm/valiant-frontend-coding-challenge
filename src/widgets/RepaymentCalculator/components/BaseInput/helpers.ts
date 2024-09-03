import { Ref } from 'vue'
/*************************************
 * types
 * ***********************************/
export type Errors = Ref<string[]>
export type Validator = (value: string) => string
/*************************************
 * helpers
 * ***********************************/
export const hasError = (errors: string[]) => errors.length > 0
export const getValidationErrors =
  (value: string) => (errors: string[], validator: Validator) => {
    const error = validator(value)
    if (error !== '') {
      errors.push(error)
    }
    return errors
  }
