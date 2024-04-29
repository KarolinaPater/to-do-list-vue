<template>
  <div class="page">
    <SelectForm :options="selectOptions" v-model="filter"></SelectForm>
    <LoaderElement v-if="isLoading" />
    <TaskItem
      v-for="task in taskList"
      :key="task._id"
      :id="task._id"
      :description="task.description"
      :done="task.done"
      @getData="getData"
    >
    </TaskItem>
  </div>
</template>
<script setup>
import LoaderElement from '@/components/LoaderElement.vue'
import TaskItem from '@/components/TaskItem.vue'
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'
import SelectForm from '@/components/SelectForm.vue'
//import useSession from '@/composables/session.js'

//const {} = useSession()

const taskList = ref()
const isLoading = ref(true)

const getData = () => {
  const config = {
    headers: {
      'x-access-token': window.localStorage.getItem('todotoken') || undefined
    }
  }
  axios

    .get(`${import.meta.env.VITE_APP_API}/task/get-task-list?done=${filter.value}`, config)
    .then((response) => {
      taskList.value = response?.data?.taskList || []
      isLoading.value = false
    })
    .catch(() => {
      alert('Wystąpił błąd')
      isLoading.value = false
    })
}

onMounted(() => {
  getData()
})

const selectOptions = [
  { label: 'gotowe', value: 'true' },
  { label: 'niegotowe', value: 'false' },
  { label: 'wszystko', value: '' }
]

const filter = ref('')
watch(
  () => filter.value,
  () => {
    getData()
  }
)
</script>
