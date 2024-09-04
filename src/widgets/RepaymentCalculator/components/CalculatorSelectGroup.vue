<script setup lang="ts">
import BaseRow from '@/widgets/RepaymentCalculator/components/BaseRow.vue'
import BaseLabel from '@/widgets/RepaymentCalculator/components/BaseLabel.vue'
import BaseSelect from '@/widgets/RepaymentCalculator/components/BaseSelect/BaseSelect.vue'
import { Option } from '@/widgets/RepaymentCalculator/components/BaseSelect/helpers'

defineProps<{
  id: string
  value: string
  handleChange: (value) => void
  label: string
  placeholder: string
  name: string
  options: Option[]
}>()
</script>

<template>
  <base-row>
    <base-label :for-id="id">{{ label }}</base-label>
    <span>
      <base-select
        :id="id"
        :value="value"
        :options="options"
        :name="name"
        :placeholder="placeholder"
        @select-change="handleChange"
      />
    </span>
  </base-row>
</template>

<style scoped></style>
