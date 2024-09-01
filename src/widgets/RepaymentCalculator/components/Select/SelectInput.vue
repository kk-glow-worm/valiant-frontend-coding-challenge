<script setup lang="ts">
import {
  handleChangeWrapper,
  Option,
  Payload,
} from '@/widgets/RepaymentCalculator/components/Select/helpers'
import { StateName } from '@/widgets/RepaymentCalculator/stores/uiStore'
/*************************************
 * Setup
 * ***********************************/
defineProps<{
  options: Option[]
  placeholder: string
  name: StateName
}>()

const emit = defineEmits<{
  (e: 'selectChange', payload: Payload): void
}>()
/*************************************
 * helpers - handle event
 * ***********************************/
const handleChange = handleChangeWrapper(emit)
</script>

<template>
  <select @change="handleChange(name, $event)">
    <option value="">{{ placeholder }}</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<style scoped></style>
