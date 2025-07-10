<template>
  <div class="resep-card">
    <div class="image-container">
      <img :src="resep.gambar" alt="Gambar Resep" />
      <span class="label">Makanan</span>
    </div>
    <div class="card-content">
      <h3>{{ resep.judul }}</h3>
      <p class="bahan"><strong>Bahan:</strong> {{ resep.bahan }}</p>
      <div class="buttons">
        <router-link :to="`/resep/${resep.id}`" class="btn-detail">📖 Detail</router-link>
        <button @click="$emit('favorit')" class="btn-fav">❤️</button>
        <button @click="$emit('hapus')" class="btn-delete">🗑️</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['resep'])
</script>

<style scoped>
.resep-card {
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}

.resep-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.image-container {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.label {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #555;
  font-weight: 600;
}

.card-content {
  padding: 16px;
  flex: 1;
}

.card-content h3 {
  margin: 0 0 10px;
  font-size: 1.1rem;
  color: #333;
}

.bahan {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 12px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}

.btn-detail {
  background: #f093fb;
  color: white;
  padding: 8px 14px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: bold;
  transition: 0.2s ease;
}

.btn-detail:hover {
  background: #f5576c;
}

.btn-fav,
.btn-delete {
  background: #fdeff6;
  border: none;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s ease;
}

.btn-fav:hover {
  background: #ffd9e8;
}

.btn-delete:hover {
  background: #ffeaea;
}
</style>
