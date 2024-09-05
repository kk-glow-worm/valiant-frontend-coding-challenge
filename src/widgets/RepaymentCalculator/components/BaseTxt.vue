<script setup lang="ts">
interface Props {
  primary?: boolean
}

const { primary } = withDefaults(defineProps<Props>(), {
  primary: false,
})
</script>

<template>
  <p :class="{ 'text-primary-color': primary }" class="mr-1 inline-block">
    <slot />
  </p>
</template>
