<template>
  <div class="page">
    <InputText label="login:" v-model="loginForm.email"></InputText>
    <InputText label="hasło:" v-model="loginForm.password" type="password"></InputText>
    <AddButton @click="handleLogin" :disabled="isLoading" text="Zaloguj się"></AddButton>

    <RouterLink to="/register">Zarejestruj się</RouterLink>
  </div>
</template>

<script setup>
import InputText from '@/components/InputText.vue'
import AddButton from '@/components/AddButton.vue'
import { ref } from 'vue'
import axios from 'axios'
import useSession from '@/composables/session.js'
import { useRouter } from 'vue-router'

const { setSession } = useSession()
const router = useRouter()

const isLoading = ref(false)

const loginForm = ref({
  email: '',
  password: ''
})

const handleLogin = () => {
  isLoading.value = true
  axios
    .post(`${import.meta.env.VITE_APP_API}/login`, loginForm.value)

    .then((response) => {
      setSession(response.data.user)
      window.localStorage.setItem('todotoken', response.data.accessToken)
      alert('Zalogowano')
      router.push('/app')
      isLoading.value = false
    })
    .catch((error) => {
      alert('Wystąpił błąd')
      alert(error.response.data.message || 'Błąd serwera')
      isLoading.value = false
    })
}
</script>
