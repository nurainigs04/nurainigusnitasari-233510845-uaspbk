<template>
  <div class="resep-list">
    <div class="grid">
      <ResepCard
        v-for="resep in resepStore.resepFavorit"
        :key="resep.id"
        :resep="resep"
        @favorit="resepStore.tambahFavorit(resep)"
        @hapus="hapusResep(resep.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useResepStore } from '../stores/resepStore'
import ResepCard from '../components/ResepCard.vue'

const resepStore = useResepStore()

onMounted(() => {
  resepStore.ambilData()
})

const hapusResep = async (id) => {
  await resepStore.hapusResep(id)
}
</script>

<style scoped>
.resep-list {
  padding: 30px;
  max-width: 1200px;
  margin: auto;
}

.judul {
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.8rem;
  color: #f06292;
  font-weight: bold;
  text-shadow: 1px 1px 2px #ffb6c1;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
</style>
