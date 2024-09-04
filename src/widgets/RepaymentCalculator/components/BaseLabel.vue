<script setup lang="ts">
defineProps<{
  forId: string
}>()
</script>

<template>
  <label :for="forId" class="shrink-0"><slot /></label>
</template>
