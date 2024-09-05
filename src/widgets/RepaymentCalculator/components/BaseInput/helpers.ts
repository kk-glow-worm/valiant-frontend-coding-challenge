import { Ref } from 'vue'
/*************************************
 * types
 * ***********************************/
export type Errors = Ref<string[]>
export type Validator = (value: string) => string
/*************************************
 * helpers
 * ***********************************/
export const getValidationErrors =
  (value: string) => (errors: string[], validator: Validator) => {
    const error = validator(value)
    if (error !== '') {
      errors.push(error)
    }
    return errors
  }

export const classes = {
  container: 'flex flex-col',
  input:
    'border-b-2 border-dashed border-b-primary-color p-2.5 text-primary-color outline-none placeholder:text-tertiary-color',
  error: 'border-b-secondary-color text-secondary-color',
  errorMessageContainer: 'text-secondary-color',
}
