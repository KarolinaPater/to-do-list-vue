<template>
  <button class="button">
    <TrashIcon class="icon" />
    <slot></slot>
  </button>
</template>

<script setup>
import TrashIcon from '@/components/icons/trash-icon.svg'
</script>
<style scoped>
.button {
  border: none;
  color: rgba(133, 216, 255, 0.64);
  background-color: #2e485a;
  margin: 0;
  padding: 16px;
}

.button:hover {
  opacity: 0.5;
  cursor: pointer;
}

.icon {
  width: 26px;
  height: 28px;
  color: rgba(133, 216, 255, 0.64);
}
.icon:hover {
  color: rgb(148, 74, 144);
}
</style>
