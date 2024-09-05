<script setup lang="ts">
import {
  classes,
  handleChangeWrapper,
  Option,
  Payload,
} from '@/widgets/RepaymentCalculator/components/BaseSelect/helpers'
import { isEmpty } from '@/widgets/RepaymentCalculator/helpers'
/*************************************
 * setup
 * ***********************************/
defineProps<{
  options: Option[]
  placeholder: string
  name: string
  value: number | string
  id: string
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
  <select
    :id="id"
    :class="[
      classes.select,
      isEmpty(value) === false ? classes.selected : classes.notSelected,
    ]"
    @change="handleChange(name, $event)"
  >
    <option value="">{{ placeholder }}</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<style scoped>
.selected {
  color: #07bbc4;
}
</style>
