<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  classes,
  Errors,
  getValidationErrors,
  Validator,
} from '@/widgets/RepaymentCalculator/components/BaseInput/helpers'
/*************************************
 * setup
 * ***********************************/
defineProps<{
  placeholder: string
  validators: Validator[]
  id: string
}>()

const emit = defineEmits<{
  (e: 'inputChange', value: string): void
  (e: 'inputKeyDown', event: Event): void
}>()

/*************************************
 * state
 * ***********************************/
const value = ref()
const errors: Errors = ref([])
const hasError = computed(() => errors.value.length > 0)
/*************************************
 * helpers
 * ***********************************/
const validate = (value, validators: Validator[]) => {
  // validate
  errors.value = validators.reduce(getValidationErrors(value), [])
  // send value to parent
  if (errors.value.length === 0) {
    emit('inputChange', String(parseFloat(value)))
  }
}

const handleKeyDown = (event) => {
  emit('inputKeyDown', event)
}
</script>

<template>
  <div :class="classes.container">
    <input
      :id="id"
      v-model="value"
      :class="[classes.input, hasError ? classes.error : '']"
      :placeholder="placeholder"
      autocomplete="off"
      @keydown="handleKeyDown"
      @blur="validate(value, validators)"
    />
    <div v-show="hasError" :class="classes.errorMessageContainer">
      <p v-for="error in errors" :key="error">{{ error }}</p>
    </div>
  </div>
</template>
