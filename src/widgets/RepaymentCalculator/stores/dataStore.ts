import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'
/*************************************
 * types
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
  purposes: Ref<Purpose[]>
  periods: Ref<Period[]>
  terms: Ref<Term[]>
}
/*************************************
 * store
 * ***********************************/
const storeID = '@store/data/repayment-calculator'

const useDataStore = defineStore(storeID, () => {
  const purposes: Ref<Purpose[]> = ref([])
  const periods: Ref<Period[]> = ref([])
  const terms: Ref<Term[]> = ref([])

  // return { periods, purposes, terms, initStore }
  return { periods, purposes, terms } as State
})
export default useDataStore
