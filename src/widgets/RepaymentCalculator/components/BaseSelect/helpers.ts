import { StateName } from '../../stores/uiStore'
/*************************************
 * types
 * ***********************************/
export interface Option {
  value: string | number
  label: string
}

export interface Payload {
  name: StateName
  value: string
}
/*************************************
 * helpers
 * ***********************************/
export const handleChangeWrapper =
  (emit) =>
  // @ts-expect-error Event has target.value
  (name: string, { target: { value } }: Event) => {
    const payload = { name, value }
    emit('selectChange', payload)
  }

export const classes = {
  select:
    'border-b-2 border-dashed border-b-primary-color p-2.5 text-center outline-none',
  selected: 'text-primary-color',
  notSelected: 'text-tertiary-color',
}
