import { defineStore } from 'pinia'
/*************************************
 * helpers
 * ***********************************/
export interface Purpose {
  label: string
  value: string
  annualRate: number
}

export interface Period {
  label: string
  value: number
}

interface Term {
  label: string
  value: number
}
interface State {
  purposes: Purpose[]
  periods: Period[]
  terms: Term[]
}

const storeID = '@store/data/repayment-calculator'
/*************************************
 * Store
 * ***********************************/
const useDataStore = defineStore(storeID, () => {
  const purposes = [
    {
      label: 'Day-to-day capital',
      value: 'general',
      annualRate: 0.1,
    },
    {
      label: 'Vehicle or transport',
      value: 'vehicle',
      annualRate: 0.045,
    },
    {
      label: 'Financing a property',
      value: 'property',
      annualRate: 0.029,
    },
  ]
  const periods = [
    {
      label: 'Weekly',
      value: 52,
    },
    {
      label: 'Fortnightly',
      value: 26,
    },
    {
      label: 'Monthly',
      value: 12,
    },
  ]
  const terms = [
    {
      label: '6 months',
      value: 6,
    },
    {
      label: '12 months',
      value: 12,
    },
    {
      label: '2 years',
      value: 24,
    },
    {
      label: '3 years',
      value: 36,
    },
    {
      label: '5 years',
      value: 60,
    },
    {
      label: '10 years',
      value: 120,
    },
    {
      label: '20 years',
      value: 240,
    },
  ]

  return { periods, purposes, terms } as State
})
export default useDataStore
