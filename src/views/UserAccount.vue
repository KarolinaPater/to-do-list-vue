<template>
  <div class="user-account">
    <div>Jesteś zalogowany jako:</div>
    <div>{{ session?.email }}</div>
    <AddButton @click="handleLoggout" text="Wyloguj się"></AddButton>
  </div>
</template>

<script setup>
import AddButton from '@/components/AddButton.vue'
import axios from 'axios'
import useSession from '@/composables/session.js'

import { useRouter } from 'vue-router'
const { clearSession, session } = useSession()
const router = useRouter()

const handleLoggout = () => {
  const config = {
    headers: {
      'x-access-token': window.localStorage.getItem('todotoken') || undefined
    }
  }

  axios
    .post(`${import.meta.env.VITE_APP_API}/logout`, {}, config)
    .then(() => {
      clearSession()
      window.localStorage.removeItem('todotoken')
      alert('Wylogowano')
      router.push('/login')
    })
    .catch((error) => {
      alert(error.response.data.message || 'Błąd serwera')
    })
}
</script>

<style scoped>
.user-account {
  color: #2e485a;
  width: 300px;
  height: 200px;
  background-color: rgb(98, 172, 206);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  top: 24px;
  right: 0px;
  cursor: default;
  border-radius: 15px;
  border: solid 1px #2e485a;
}
</style>
