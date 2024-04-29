<template>
  <button class="button" :class="[color, { 'disabled-mode': disabled }]" :disabled="disabled">
    {{ text }}
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String
  },
  disabled: {
    type: Boolean
  },
  color: { type: String }
})
</script>
