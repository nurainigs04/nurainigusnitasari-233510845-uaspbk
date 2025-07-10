<template>
  <div id="app">
    <!-- Hanya tampil jika sudah login -->
    <div v-if="userStore.isLoggedIn">
      <header class="hero">
        <div class="overlay">
          <h1 class="hero-title">Selamat Datang di <span class="brand">ResepKu 🍲</span></h1>
          <p class="hero-subtitle">
            Temukan berbagai <span class="highlight">makanan lezat</span> favoritmu!
          </p>
          <div class="hero-buttons">
            <router-link to="/resep" class="btn-primary">🍳 Jelajahi Resep</router-link>
            <router-link to="/favorit" class="btn-secondary">💕 Lihat Favorit</router-link>
          </div>
        </div>
      </header>

      <nav class="nav">
        <router-link to="/">🏠 Home</router-link>
        <router-link to="/resep">📖 Daftar Resep</router-link>
        <router-link to="/tambah">➕ Tambah Resep</router-link>
        <router-link to="/favorit">💖 Favorit</router-link>
        <button @click="logout" class="logout-btn">🚪 Logout</button>
      </nav>
    </div>

    <!-- Bagian isi halaman -->
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useUserStore } from './stores/userStore'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const logout = () => {
  userStore.logout()
  router.push('/login') // Arahkan ke login setelah logout
}
</script>

<style scoped>
/* Hero Styles */
.hero {
  background: linear-gradient(135deg, #fef6f9, #fdeff6);
  padding: 60px 20px;
  text-align: center;
  border-bottom: 2px solid #f3d7e1;
}

.overlay {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.brand {
  color: #d16ba5;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
}

.highlight {
  background: #ffe6f0;
  padding: 2px 6px;
  border-radius: 10px;
  font-weight: bold;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Tombol */
.btn-primary, .btn-secondary {
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: linear-gradient(135deg, #f093fb, #f5576c);
  color: white;
  box-shadow: 0 4px 10px rgba(245, 87, 108, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(245, 87, 108, 0.4);
}

.btn-secondary {
  background: #ffe6f0;
  color: #d16ba5;
  border: 1px solid #fbc4de;
}

.btn-secondary:hover {
  background: #fce4ec;
}

/* Navigasi */
.nav {
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 16px;
  font-weight: 600;
}

.nav a {
  text-decoration: none;
  color: #d16ba5;
  padding: 8px 12px;
  border-radius: 10px;
  transition: background 0.2s;
}

.nav a.router-link-exact-active {
  background: #fdeff6;
}

.logout-btn {
  background: #fff;
  border: 1px solid #fbc4de;
  padding: 8px 12px;
  border-radius: 10px;
  color: #d16ba5;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.logout-btn:hover {
  background: #fce4ec;
}

/* Konten utama */
.content {
  padding: 20px;
}
</style>
