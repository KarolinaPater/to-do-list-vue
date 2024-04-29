<template>
  <div class="layout">
    <header class="header">
      <div class="menu">
        <RouterLink to="/app" v-if="isLogged">Lista zadań</RouterLink>
        <RouterLink to="/app/add" v-if="isLogged">Formularz dodawania zadań</RouterLink>
        <RouterLink v-if="!isLogged" to="/login">Zaloguj się</RouterLink>
      </div>
      <div
        v-if="isLogged"
        class="account-button"
        @mouseover="isExtended = true"
        @mouseleave="isExtended = false"
      >
        <IconAccount class="icon" />
        Witaj {{ session?.firstName }}!
        <UserAccount v-if="isExtended" />
      </div>
    </header>

    <RouterView />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import useSession from '@/composables/session.js'

import UserAccount from '@/views/UserAccount.vue'
import IconAccount from '@/components/icons/account-icon.svg'
const { isLogged, session } = useSession()

const isExtended = ref(false)
</script>

<style scoped>
.header {
  margin: 20px;
  margin-left: 50px;
  margin-right: 50px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-weight: normal;
  column-gap: 40px;
}
.menu {
  display: flex;
  column-gap: 40px;
}

.user-menu {
  display: flex;
  justify-content: space-between;
  justify-content: flex-end;

  align-items: center;
}

.account-button {
  display: flex;
  align-items: center;
  column-gap: 4px;
  cursor: pointer;
  position: relative;

  &:hover {
    color: rgba(69, 126, 153, 0.64);
  }
}

.icon {
  height: 18px;
}
</style>
