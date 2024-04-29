<template>
  <div class="wrapper">
    <div class="checkbox" :class="{ active: modelValue === true }" @click="handleClick">✓</div>
    <div>{{ label }}</div>
    <ErrorMessage :message="error" />
  </div>
</template>

<script setup>
import ErrorMessage from './ErrorMessage.vue'
const props = defineProps({
  modelValue: {
    type: Boolean
  },
  label: {
    type: String,
    required: false
  },
  error: {
    type: String
  }
})

const emit = defineEmits(['update:modelValue', 'blur'])

const handleClick = () => {
  let valueToEmit
  if (props.modelValue == false) {
    valueToEmit = true
  } else {
    valueToEmit = false
  }
  emit('update:modelValue', valueToEmit)
}
</script>
<style scoped>
.wrapper {
  display: flex;
  column-gap: 10px;
  display: flex;
  align-items: center;
}
.checkbox {
  width: 15px;
  height: 15px;
  color: transparent;
  background-color: #2e485a;
  border: 2px solid rgba(133, 216, 255, 0.64);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.checkbox.active {
  color: rgba(133, 216, 255, 0.64);
}

.checkbox:hover {
  border-color: rgba(133, 216, 255, 0.32);
}

.checkbox:active {
  color: transparent;
}
</style>
