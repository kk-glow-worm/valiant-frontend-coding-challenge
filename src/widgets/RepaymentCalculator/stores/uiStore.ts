import { defineStore } from 'pinia'
import { computed, ref, Ref, ComputedRef } from 'vue'
import useDataStore, { Purpose } from './dataStore'
import PMT from '../../../utils/PMT'
/*************************************
 * helpers
 * ***********************************/
const storeID = '@store/ui/repayment-calculator'

export type StateName = 'amount' | 'purpose' | 'period' | 'term'

export interface State {
  amount: Ref<number | null>
  purpose: Ref<string>
  period: Ref<number | null>
  term: Ref<number | null>
  rate: ComputedRef<number>
  repayment: ComputedRef<number>
}

const getRate = (purposes: Purpose[], purpose: Ref<string>) => () =>
  purposes.find(({ value }) => value === purpose.value)?.annualRate

const getRepayment = (amount, rate, period, term) => () => {
  // period is number of repayments in a year
  // convert term to years then times periods/year
  // to get the total number of periods of the whole term
  const numOfPeriods = (term.value / 12) * period.value

  return PMT(rate.value / period.value, numOfPeriods, amount.value)
}

/*************************************
 * Store
 * ***********************************/
const useUIStore = defineStore(storeID, () => {
  // states
  const amount = ref(null)
  const purpose = ref('')
  const period = ref(null)
  const term = ref(null)
  // store access
  const { purposes } = useDataStore()
  // getters
  const rate = computed(getRate(purposes, purpose))
  const repayment = computed(getRepayment(amount, rate, period, term))

  return {
    amount,
    purpose,
    period,
    term,
    rate,
    repayment,
  } as State
})
export default useUIStore
