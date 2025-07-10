import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false)
  const username = ref('')

  const login = (user, pass) => {
    if (user === 'admin' && pass === '1234') {
      isLoggedIn.value = true
      username.value = user
      return true
    }
    return false
  }

  const logout = () => {
    isLoggedIn.value = false
    username.value = ''
  }

  return { isLoggedIn, username, login, logout }
})
