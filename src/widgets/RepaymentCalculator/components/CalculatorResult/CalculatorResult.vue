<script setup lang="ts">
import BaseTxt from '@/widgets/RepaymentCalculator/components/BaseTxt.vue'
import { displayRepayment } from '@/widgets/RepaymentCalculator/components/CalculatorResult/helpers'

interface Props {
  periodLabel: string
  periodRepayment: number
  totalRepayment: number
}

const { periodLabel = '' } = withDefaults(defineProps<Props>(), {
  periodLabel: '',
})
</script>

<template>
  <div>
    <hr class="my-7" />
    <div>
      <base-txt>{{ periodLabel }} repayment: </base-txt>
      <base-txt primary>{{ displayRepayment(periodRepayment) }}</base-txt>
    </div>
    <div class="mt-7">
      <base-txt>Total repayment:</base-txt>
      <base-txt primary>{{ displayRepayment(totalRepayment) }}</base-txt>
    </div>
  </div>
</template>

<style scoped></style>
