<template>
  <div v-if="resep">
    <h2>{{ resep.judul }}</h2>
    <h3>Bahan:</h3>
    <ul>
      <li v-for="(item, index) in resep.bahan" :key="index">{{ item }}</li>
    </ul>

    <h3>Langkah:</h3>
    <ol>
      <li v-for="(step, index) in resep.langkah" :key="index">{{ step }}</li>
    </ol>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const resep = ref(null)

const getImageUrl = (filename) => {
  return new URL(`/src/assets/${filename}`, import.meta.url).href
}

onMounted(async () => {
  try {
    const id = Number(route.params.id)
    const res = await axios.get(`https://jsonserver-production-8a4c.up.railway.app/resep/${id}`)
    resep.value = res.data
  } catch (e) {
    console.error('Gagal ambil data:', e)
  }
})
</script>

<style scoped>
.gambar {
  max-width: 100%;
  margin: 16px 0;
  border-radius: 12px;
}
</style>
