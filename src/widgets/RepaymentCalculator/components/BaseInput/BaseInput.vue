<script setup lang="ts">
import { ref } from 'vue'
import {
  Errors,
  getValidationErrors,
  hasError,
  Validator,
} from '@/widgets/RepaymentCalculator/components/BaseInput/helpers'
import { Payload } from '@/widgets/RepaymentCalculator/components/BaseSelect/helpers'
/*************************************
 * Setup
 * ***********************************/
defineProps<{
  placeholder: string
  type: string
  validators: Validator[]
}>()

const emit = defineEmits<{
  (e: 'inputChange', payload: Payload): void
}>()

/*************************************
 * State
 * ***********************************/
const value = ref()
const errors: Errors = ref([])
/*************************************
 * Helpers
 * ***********************************/
const validate = (value, validators: Validator[]) => {
  // validate
  errors.value = validators.reduce(getValidationErrors(value), [])
  // send value to parent
  if (errors.value.length === 0) {
    emit('inputChange', value)
  }
}
</script>

<template>
  <input
    v-model="value"
    :type="type"
    :placeholder="placeholder"
    @blur="validate(value, validators)"
  />
  <div v-show="hasError(errors)">
    <p v-for="error in errors" :key="error">{{ error }}</p>
  </div>
</template>

<style scoped></style>
