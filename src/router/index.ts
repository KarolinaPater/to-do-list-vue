import { createRouter, createWebHistory } from 'vue-router'
import ToDoList from '@/views/ToDoList.vue'
import AddForm from '@/views/AddForm.vue'
import RegisterForm from '@/views/RegisterForm.vue'
import LoginForm from '@/views/LoginForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      name: 'toDoList',
      component: ToDoList
    },
    {
      path: '/app/add',
      name: 'addToDo',
      component: AddForm
    },
    {
      path: '/register',
      name: 'registerForm',
      component: RegisterForm
    },
    {
      path: '/login',
      name: 'loginForm',
      component: LoginForm
    }
  ]
})

export default router
