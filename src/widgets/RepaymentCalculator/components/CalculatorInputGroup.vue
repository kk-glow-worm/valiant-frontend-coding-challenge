<script setup lang="ts">
import BaseRow from '@/widgets/RepaymentCalculator/components/BaseRow.vue'
import BaseLabel from '@/widgets/RepaymentCalculator/components/BaseLabel.vue'
import { Validator } from '@/widgets/RepaymentCalculator/components/BaseInput/helpers.js'
import BaseInput from '@/widgets/RepaymentCalculator/components/BaseInput/BaseInput.vue'

defineProps<{
  id: string
  validators: Validator[]
  handleChange: (value) => void
  label: string
  placeholder: string
}>()
</script>

<template>
  <base-row>
    <base-label :for-id="id">{{ label }}</base-label>
    <base-input
      :id="id"
      :placeholder="placeholder"
      :validators="validators"
      @input-change="handleChange"
    />
  </base-row>
</template>

<style scoped></style>
