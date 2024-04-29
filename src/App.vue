<template>
  <LoaderElement v-if="isLoading" />
  <Layout v-else />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import useSession from '@/composables/session.js'
import Layout from '@/layout/Layout.vue'

const isLoading = ref(true)

const { checkSession } = useSession()

onMounted(() => {
  checkSession()

  isLoading.value = false
})
</script>
