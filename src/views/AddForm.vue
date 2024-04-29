<template>
  <div class="page">
    <InputText label="Treść zadania: " v-model="form.description" />
    <AddButton @click="handleClick" :disabled="disabled">Dodaj zadanie</AddButton>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'
import { ref } from 'vue'
import InputText from '@/components/InputText.vue'
import AddButton from '@/components/AddButton.vue'

const router = useRouter()

const form = ref({ description: '' })
const disabled = ref(false)

const handleClick = () => {
  disabled.value = true

  if (form.value.description?.length < 1) {
    alert('Pole wymagane')
    disabled.value = false
    return
  }

  const body = {
    description: form.value.description
  }
  const config = {
    headers: {
      'x-access-token': window.localStorage.getItem('todotoken') || undefined
    }
  }

  axios
    .post(`${import.meta.env.VITE_APP_API}/task/add`, body, config)
    .then(() => {
      alert('Zadanie dodane')
      router.push({ path: '/' })
    })
    .catch(() => {
      alert('Wystąpił błąd')
    })
  disabled.value = false
}
</script>
