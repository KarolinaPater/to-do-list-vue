<template>
  <div class="text-input-wrapper">
    <div class="text-input-label">{{ label }}</div>

    <input
      @input="(e) => handleInput(e)"
      @blur="handleBlur"
      class="text-input-input"
      :type="type"
      :value="modelValue"
    />

    <ErrorMessage :message="error" />
  </div>
</template>
<script setup>
import ErrorMessage from './ErrorMessage.vue'

defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  error: {
    type: String
  },
  type: {
    type: String,
    default: 'text'
  }
})

const emit = defineEmits(['update:modelValue', 'blur'])

const handleBlur = () => {
  emit('blur')
}

const handleInput = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>
<style scoped>
@import '../assets/base.css';

.text-input-wrapper {
  padding-top: 10px;
  padding-bottom: 2px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.text-input-label {
  display: flex;
  column-gap: 6px;
  margin-bottom: 8px;
}

.text-input-input {
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(133, 216, 255, 0.64);
}
</style>
