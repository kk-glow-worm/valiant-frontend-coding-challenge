<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useUIStore, { State } from './stores/uiStore.js'
import BaseSelect from '@/widgets/RepaymentCalculator/components/BaseSelect/BaseSelect.vue'
import {
  displayRepayment,
  isReady,
  maxValidator,
  minValidator,
  periodLabel,
  processAmountPayload,
  totalRepayment,
  updateStore,
} from '@/widgets/RepaymentCalculator/helpers'
import useDataStore from '@/widgets/RepaymentCalculator/stores/dataStore'
import BaseInput from '@/widgets/RepaymentCalculator/components/BaseInput/BaseInput.vue'
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
const updateState = updateStore(uiStore)
const updateAmount = (value) => {
  updateState(processAmountPayload(value))
}
</script>

<template>
  <div>
    <div>
      I'm looking for $
      <base-input
        placeholder="amount"
        type="number"
        :validators="[minValidator, maxValidator]"
        @input-change="updateAmount"
      />
      for
      <base-select
        :options="purposes"
        name="purpose"
        placeholder="purpose"
        @select-change="updateState"
      />
    </div>
    <div>
      to be paid
      <base-select
        :options="periods"
        name="period"
        placeholder="repayment period"
        @select-change="updateState"
      />
      over
      <base-select
        :options="terms"
        name="term"
        placeholder="loan term"
        @select-change="updateState"
      />
    </div>
    <div v-show="isReady({ amount, purpose, period, term })">
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
