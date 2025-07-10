<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="login-title">👩‍🍳 Masuk ke ResepKu</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="user" placeholder="👤 Username" required />
        <input v-model="pass" type="password" placeholder="🔒 Password" required />
        <button type="submit">Login</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'

const userStore = useUserStore()
const user = ref('')
const pass = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = () => {
  if (userStore.login(user.value, pass.value)) {
    router.push('/')
  } else {
    error.value = 'Username atau password salah'
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f8fafc;
  padding: 20px;
}

.login-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 380px;
  border: 1px solid #e2e8f0;
}

.login-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: #1e293b;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

input {
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 0.95rem;
  background: white;
  transition: all 0.2s ease;
}

input:focus {
  border-color: #3b82f6;
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

input::placeholder {
  color: #9ca3af;
}

button {
  padding: 12px 24px;
  border-radius: 8px;
  background: #3b82f6;
  color: white;
  font-weight: 500;
  font-size: 0.95rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 8px;
}

button:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}

.error {
  color: #ef4444;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 12px;
  padding: 8px;
  background: #fef2f2;
  border-radius: 6px;
  border: 1px solid #fecaca;
}

@media (max-width: 480px) {
  .login-card {
    padding: 24px;
    margin: 0 16px;
  }
  
  .login-title {
    font-size: 1.25rem;
  }
}
</style>