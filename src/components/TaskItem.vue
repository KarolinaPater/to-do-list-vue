<template>
  <div class="task-wrapper">
    <div class="task">
      <div>{{ description }}</div>
      <div>status: {{ done }}</div>
    </div>
    <div class="icon-wrapper">
      <StatusButton @click="handleStatus" :done="done"></StatusButton>
      <DeleteButton @click="handleDeleteTask" />
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import DeleteButton from '@/components/DeleteButton.vue'
import StatusButton from '@/components/StatusButton.vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    required: false
  }
})

const emit = defineEmits(['getData'])

const handleDeleteTask = () => {
  const config = {
    headers: {
      'x-access-token': window.localStorage.getItem('todotoken') || undefined
    }
  }

  axios
    .delete(`${import.meta.env.VITE_APP_API}/task/delete/${props.id}`, config)

    .then(() => {
      emit('getData')
    })
    .catch((error) => {
      alert(error?.response?.data?.message || 'Błąd serwera')
    })
}

const handleStatus = () => {
  const config = {
    headers: {
      'x-access-token': window.localStorage.getItem('todotoken') || undefined
    }
  }
  const body = { done: !props.done }
  axios
    .put(`${import.meta.env.VITE_APP_API}/task/change-status/${props.id}`, body, config)

    .then(() => {
      emit('getData')
    })
    .catch((error) => {
      alert(error?.response?.data?.message || 'Błąd serwera')
    })
}
</script>

<style>
.task-wrapper {
  padding: 10px;
  border: 1px solid rgba(133, 216, 255, 0.64);
  border-radius: 20px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task {
  display: flex;
  display: table-column;
}
.task-wrapper:hover {
  border: 1px solid rgb(148, 74, 144);
}
.icon-wrapper {
  display: flex;
  align-items: center;
}
</style>
