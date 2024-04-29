<template>
  <button class="button">
    <BackIcon v-if="done" class="icon" />
    <CheckIcon v-else class="icon" />
    <slot></slot>
  </button>
</template>

<script setup>
import CheckIcon from '@/components/icons/checked-icon.svg'
import BackIcon from '@/components/icons/back-icon.svg'

const props = defineProps({
  done: {
    type: Boolean,
    required: false
  }
})
</script>
<style scoped>
.button {
  border: none;
  color: rgba(133, 216, 255, 0.64);
  background-color: #2e485a;
  margin: 0;
  padding: 20px;
}

.button:hover {
  opacity: 0.5;
  cursor: pointer;
}

.icon {
  width: 20px;
  height: 20px;
  color: rgba(133, 216, 255, 0.64);
}

.icon:hover {
  color: rgb(148, 74, 144);
}
</style>
