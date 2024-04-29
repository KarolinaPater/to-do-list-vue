<template>
  <div class="error-message">{{ message }}</div>
</template>
<script setup>
defineProps({
  message: {
    type: String
  }
})
</script>
<style scoped>
.error-message {
  padding-top: 4px;
  height: 28px;
  color: rgb(196, 83, 181);
}
</style>

