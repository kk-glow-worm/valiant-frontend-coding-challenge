<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useUIStore from './stores/uiStore.js'
import {
  amountID,
  invalidNumValidator,
  isReady,
  maxValidator,
  minValidator,
  periodID,
  periodLabel,
  processAmountPayload,
  purposeID,
  restrictInputToDigitsOnly,
  termsID,
  totalRepayment,
  updateStore,
} from '@/widgets/RepaymentCalculator/helpers'
import useDataStore from '@/widgets/RepaymentCalculator/stores/dataStore'
import { useInitDataStore } from '@/widgets/RepaymentCalculator/composables/useInitDataStore'
import CalculatorInputGroup from '@/widgets/RepaymentCalculator/components/CalculatorInputGroup.vue'
import CalculatorSelectGroup from '@/widgets/RepaymentCalculator/components/CalculatorSelectGroup.vue'
import CalculatorRow from '@/widgets/RepaymentCalculator/components/CalculatorRow.vue'
import CalculatorResult from '@/widgets/RepaymentCalculator/components/CalculatorResult/CalculatorResult.vue'
/*************************************
 * store access
 * ***********************************/
useInitDataStore()
const uiStore = useUIStore()
const { amount, purpose, period, term, repayment } = storeToRefs(uiStore)
const { periods, purposes, terms } = storeToRefs(useDataStore())
/*************************************
 * helpers
 * ***********************************/
const updateState = updateStore(uiStore)
const updateAmount = (value) => {
  updateState(processAmountPayload(String(parseInt(value))))
}

const classes = {
  container: 'flex flex-col content-center p-7',
}
</script>

<template>
  <div :class="classes.container">
    <calculator-row>
      <calculator-input-group
        :id="amountID"
        :validators="[invalidNumValidator, minValidator, maxValidator]"
        :handle-change="updateAmount"
        :handle-key-down="restrictInputToDigitsOnly"
        label="I'm looking for $"
        placeholder="amount"
      />
      <calculator-select-group
        :id="purposeID"
        :value="purpose"
        :options="purposes"
        :handle-change="updateState"
        name="purpose"
        label="for"
        placeholder="purpose"
      />
    </calculator-row>
    <calculator-row>
      <calculator-select-group
        :id="periodID"
        :value="period"
        :options="periods"
        :handle-change="updateState"
        name="period"
        label="to be paid"
        placeholder="repayment period"
      />
      <calculator-select-group
        :id="termsID"
        :value="term"
        :options="terms"
        :handle-change="updateState"
        name="term"
        label="over"
        placeholder="loan term"
      />
    </calculator-row>
    <calculator-result
      v-show="isReady({ amount, purpose, period, term })"
      :period-label="periodLabel(period, periods)"
      :period-repayment="repayment"
      :total-repayment="totalRepayment(repayment, period, term)"
    />
  </div>
</template>
