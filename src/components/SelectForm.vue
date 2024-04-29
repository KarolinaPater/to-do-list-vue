<template>
  <div className="select-wrapper">
    <label className="select-label">
      {{ label }}
    </label>
    <select @input="(e) => handleInput(e)" class="select" :value="modelValue">
      <option hidden value="">-- select an option --</option>
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.label }}
      </option></select
    ><ErrorMessage :message="error" />
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
    required: false
  },
  error: {
    type: String
  },
  options: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>

<style scoped>
.select-wrapper {
  padding-top: 10px;
  padding-bottom: 28px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.select-label {
  display: flex;
  column-gap: 6px;
  margin-bottom: 8px;
}

.select {
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(133, 216, 255, 0.64);
}
</style>
