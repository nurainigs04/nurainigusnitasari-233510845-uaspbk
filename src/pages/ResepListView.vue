<template>
  <div class="resep-list">
    <div class="grid">
      <ResepCard
        v-for="resep in resepStore.resepList"
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
  color: #d16ba5;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
</style>
