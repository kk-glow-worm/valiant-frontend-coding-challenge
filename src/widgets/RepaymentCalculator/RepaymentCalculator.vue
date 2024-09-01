<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useUIStore, { State } from './stores/uiStore.js'
import SelectInput from '@/widgets/RepaymentCalculator/components/Select/SelectInput.vue'
import {
  displayRepayment,
  isReady,
  periodLabel,
  processAmountPayload,
  totalRepayment,
  updateStore,
} from '@/widgets/RepaymentCalculator/helpers'
import useDataStore from '@/widgets/RepaymentCalculator/stores/dataStore'
/*************************************
 * Store access
 * ***********************************/
const uiStore = useUIStore()
const { amount, purpose, period, term, repayment }: State = storeToRefs(uiStore)
const dataStore = useDataStore()
const { periods, terms, purposes } = dataStore
/*************************************
 * Helpers
 * ***********************************/
const handleEvent = updateStore(uiStore)
</script>

<template>
  <div>
    <div>
      I'm looking for $
      <input
        placeholder="amount"
        :value="amount"
        @input="handleEvent(processAmountPayload($event))"
      />
      for
      <select-input
        :options="purposes"
        name="purpose"
        placeholder="purpose"
        @select-change="handleEvent"
      />
    </div>
    <div>
      to be paid
      <select-input
        :options="periods"
        name="period"
        placeholder="repayment period"
        @select-change="handleEvent"
      />
      over
      <select-input
        :options="terms"
        name="term"
        placeholder="loan term"
        @select-change="handleEvent"
      />
    </div>
    <div v-show="isReady(amount, purpose, period, term)">
      <hr />
      <div>
        {{ periodLabel(period, periods) }} repayment amount:
        {{ displayRepayment(repayment) }}
      </div>
      <div>
        total repayment:
        {{ displayRepayment(totalRepayment(repayment, period, term)) }}
      </div>
    </div>
  </div>
</template>
<style scoped></style>
