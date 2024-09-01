import { StateName } from '../../stores/uiStore'

export interface Option {
  value: string | number
  label: string
}

export interface Payload {
  name: StateName
  value: string | number
}

export const handleChangeWrapper =
  (emit) =>
  // @ts-expect-error Event has target.value
  (name: StateName, { target: { value } }: Event) => {
    const payload = { name, value }
    emit('selectChange', payload)
  }
