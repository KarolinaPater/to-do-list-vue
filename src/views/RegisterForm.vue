<template>
  <div class="page">
    <InputText
      label="email:"
      :error="errors?.email?._errors[0] || null"
      v-model="registerForm.email"
      @blur="handleValid('email')"
    ></InputText>
    <InputText
      label="hasło:"
      :error="errors?.password?._errors[0]"
      v-model="registerForm.password"
      @blur="handleValid('password')"
      type="password"
    ></InputText>
    <InputText
      label="powtórz hasło:"
      :error="errors?.confirmPassword?._errors[0]"
      v-model="registerForm.confirmPassword"
      type="password"
    ></InputText>
    <InputText
      label="imię:"
      :error="errors?.firstName?._errors[0]"
      v-model="registerForm.firstName"
    ></InputText>
    <SelectForm
      label="płeć:"
      :error="errors?.sex?._errors[0]"
      v-model="registerForm.sex"
      :options="sexOptions"
    ></SelectForm>

    <CheckBox
      label="Akceptuje regulamin"
      :error="errors?.rules?._errors[0]"
      v-model="registerForm.rules"
    />
    <AddButton @click="handleRegister" text="Zarejestruj się" :disabled="isLoading"></AddButton>
  </div>
</template>

<script setup>
import InputText from '@/components/InputText.vue'
import AddButton from '@/components/AddButton.vue'
import SelectForm from '@/components/SelectForm.vue'
import { ref } from 'vue'
import * as z from 'zod'
import axios from 'axios'

import CheckBox from '@/components/CheckBox.vue'

const sexOptions = [
  { label: 'kobieta', value: 'woman' },
  { label: 'mężczyzna', value: 'man' },
  { label: 'inne', value: 'another' }
]

const isLoading = ref(false)

const registerForm = ref({
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  sex: '',
  selectForm: '',
  rules: false
})

const registerFormSchema = z
  .object({
    email: z.string().nonempty('To pole jest wymagane').email({ message: 'Nieprawidlowy format' }),
    firstName: z
      .string()
      .min(2, { message: 'Minimalna długość to 2 znaki' })
      .max(50, { message: 'Maksymalna długość to 50 znaków' }),
    password: z
      .string()
      .nonempty('To pole jest wymagane')
      .min(8, { message: 'Minimalna długość znakow to 8' }),
    confirmPassword: z.string(),
    sex: z.string().nonempty('To pole jest wymagane'),
    rules: z.literal(true, { message: 'Zgody są wymagane' })
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Hasła muszą być identyczne',
    path: ['confirmPassword']
  })

const errors = ref(null)

const handleValid = (fieldName) => {
  const validSchema = registerFormSchema.safeParse(registerForm.value)
  if (!validSchema?.success) {
    const fieldError = validSchema?.error.format()
    errors.value = { ...errors.value, [fieldName]: fieldError?.[fieldName] }
  }
}

const handleRegister = () => {
  const validSchema = registerFormSchema.safeParse(registerForm.value)

  if (!validSchema?.success) {
    errors.value = validSchema?.error?.format()
    return
  }
  errors.value = null

  if (errors.value) {
    return
  }

  isLoading.value = true
  axios
    .post(`${import.meta.env.VITE_APP_API}/register`, registerForm.value)

    .then(() => {
      alert('Rejestracja zakończona sukcesem')
      isLoading.value = false
    })
    .catch((error) => {
      alert('Wystąpił błąd')
      alert(error.response.data.message || 'Błąd serwera')
      isLoading.value = false
    })
}
</script>
