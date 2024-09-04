<script setup lang="ts">
interface Props {
  primary?: boolean
  withSpace?: boolean
}

const { primary, withSpace } = withDefaults(defineProps<Props>(), {
  primary: false,
  withSpace: true,
})
</script>

<template>
  <p :class="[primary ? 'text-primary-color' : '', 'inline-block']">
    <slot /> {{ withSpace ? '&nbsp;' : '' }}
  </p>
</template>
