import { storeToRefs } from 'pinia'
import { useFetch } from './useFetch'
import { periodsUrl, purposesUrl, termsUrl } from '../helpers'
import useDataStore from '../stores/dataStore'

export const useInitDataStore = async () => {
  const dataStore = useDataStore()
  const { purposes, periods, terms } = storeToRefs(dataStore)

  const [{ data: purposesData }, { data: periodsData }, { data: termsData }] =
    await Promise.all([
      useFetch(purposesUrl),
      useFetch(periodsUrl),
      useFetch(termsUrl),
    ])

  purposes.value = purposesData
  periods.value = periodsData
  terms.value = termsData
}
