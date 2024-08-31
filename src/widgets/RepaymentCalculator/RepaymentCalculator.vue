<script setup>
const purposes = [
  {
    label: 'Day-to-day capital',
    value: 'general',
    annualRate: 0.1,
  },
  {
    label: 'Vehicle or transport',
    value: 'vehicle',
    annualRate: 0.045,
  },
  {
    label: 'Financing a property',
    value: 'property',
    annualRate: 0.029,
  },
]
const periods = [
  {
    label: 'Weekly',
    value: 52,
  },
  {
    label: 'Fortnightly',
    value: 26,
  },
  {
    label: 'Monthly',
    value: 12,
  },
]

const terms = [
  {
    label: '6 months',
    value: 6,
  },
  {
    label: '12 months',
    value: 12,
  },
  {
    label: '2 years',
    value: 24,
  },
  {
    label: '3 years',
    value: 36,
  },
  {
    label: '5 years',
    value: 60,
  },
  {
    label: '10 years',
    value: 120,
  },
  {
    label: '20 years',
    value: 240,
  },
]
</script>

<template>
  <div>
    <div>
      I'm looking for $ <input placeholder="amount" /> for
      <select>
        <option
          v-for="purpose in purposes"
          :key="purpose.value"
          :value="purpose.value"
        >
          {{ purpose.label }}
        </option>
      </select>
    </div>
    <div>
      to be paid
      <select>
        <option v-for="period in periods" :key="period.value">
          {{ period.label }}
        </option>
      </select>
      over
      <select>
        <option v-for="term in terms" :key="term.value">
          {{ term.label }}
        </option>
      </select>
    </div>
    <hr />
    <div>Weekly repayment amount: xxx</div>
    <div>total amount over xxx years</div>
  </div>
</template>
<style scoped></style>
