import { defineStore, storeToRefs } from 'pinia'
import { computed, ref, Ref, ComputedRef } from 'vue'
import useDataStore, { Purpose } from './dataStore'
import PMT from '../../../utils/PMT'
/*************************************
 * types
 * ***********************************/
export type StateName = 'amount' | 'purpose' | 'period' | 'term'

interface State {
  amount: Ref<string>
  purpose: Ref<string>
  period: Ref<string>
  term: Ref<string>
  rate: ComputedRef<number>
  repayment: ComputedRef<number>
}
/*************************************
 * helpers
 * ***********************************/
const getRate = (purposes: Ref<Purpose[]>, purpose: Ref<string>) => () =>
  purposes.value.find(({ value }) => value === purpose.value)?.annualRate

const getRepayment = (amount, rate, period, term) => () => {
  /*
    1. period is number of repayments in a year
    2. convert term to years then times periods/year
    3. to get the total number of periods of the whole term
   */
  const numOfPeriods = (term.value / 12) * period.value

  return PMT(rate.value / period.value, numOfPeriods, amount.value)
}
/*************************************
 * store
 * ***********************************/
const storeID = '@store/ui/repayment-calculator'

const useUIStore = defineStore(storeID, () => {
  // states
  const amount = ref('')
  const purpose = ref('')
  const period = ref('')
  const term = ref('')
  // store access
  const { purposes } = storeToRefs(useDataStore())
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
