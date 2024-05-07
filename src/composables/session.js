import { ref } from 'vue'
import axios from 'axios'

const session = ref()

const isLogged = ref(false)

const useSession = () => {
  const setSession = (newSession) => {
    session.value = newSession
    isLogged.value = true
  }

  const clearSession = () => {
    session.value = undefined
    isLogged.value = false
  }

  const checkSession = async () => {
    const config = {
      headers: {
        'x-access-token': window.localStorage.getItem('todotoken') || undefined
      }
    }
    await axios
      .post(`${import.meta.env.VITE_APP_API}/session`, {}, config)
      .then((response) => {
        setSession(response.data.user)

        window.localStorage.setItem('todotoken', response.data.accessToken)
      })
      .catch(() => {
        clearSession()
        window.localStorage.removeItem('token')
      })
  }

  return {
    session,
    isLogged,
    setSession,
    clearSession,
    checkSession
  }
}

export default useSession
