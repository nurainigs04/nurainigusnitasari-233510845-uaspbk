<template>
  <form @submit.prevent="tambahResep">
    <input v-model="judul" placeholder="Judul Resep" required />
    <input v-model="bahan" placeholder="Bahan (pisahkan dengan koma)" required />
    <textarea v-model="langkah" placeholder="Langkah-langkah (pisahkan dengan titik koma)" required></textarea>

    <input type="file" @change="handleGambar" accept="image/*" required />
    <div v-if="previewUrl">
      <img :src="previewUrl" alt="Preview Gambar" class="preview" />
    </div>

    <button type="submit">Simpan Resep</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const judul = ref('')
const bahan = ref('')
const langkah = ref('')
const gambar = ref(null)
const previewUrl = ref('')
const router = useRouter()

const handleGambar = (e) => {
  const file = e.target.files[0]
  if (file) {
    gambar.value = file
    previewUrl.value = URL.createObjectURL(file)
  }
}

const tambahResep = async () => {
  if (!gambar.value) return alert('Gambar belum dipilih!')

  const resepBaru = {
    judul: judul.value,
    bahan: bahan.value.split(',').map(b => b.trim()),
    langkah: langkah.value.split(';').map(l => l.trim()),
    gambar: `src/assets/${gambar.value.name}`
  }

  await axios.post('http://localhost:3003/resep', resepBaru)
  alert('Resep berhasil ditambahkan!')

  // Reset form
  judul.value = ''
  bahan.value = ''
  langkah.value = ''
  gambar.value = null
  previewUrl.value = ''

  router.push('/resep')
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;
  margin: 0 auto;
  background: #fff0f6;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  border: 2px solid #fbc4de;
}

input,
textarea {
  padding: 12px 16px;
  border: 1px solid #e0cfdc;
  border-radius: 10px;
  font-size: 1rem;
  background: #ffffff;
  transition: 0.2s ease;
  font-family: 'Segoe UI', sans-serif;
}

input:focus,
textarea:focus {
  border-color: #d16ba5;
  outline: none;
  box-shadow: 0 0 0 3px rgba(209, 107, 165, 0.2);
}

textarea {
  min-height: 100px;
  resize: vertical;
}

button {
  padding: 12px;
  border: none;
  border-radius: 25px;
  background: linear-gradient(135deg, #f2e1f4, #ecdbde);
  color: black;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease;
}

button:hover {
  background: linear-gradient(135deg, #f5576c, #f093fb);
  transform: translateY(-2px);
}

.preview {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #f3c4d7;
  margin-top: 8px;
}
</style>
