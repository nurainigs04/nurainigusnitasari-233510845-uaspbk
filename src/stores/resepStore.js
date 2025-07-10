import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useResepStore = defineStore('resep', () => {
  const resepList = ref([])

  const ambilData = async () => {
    const res = await axios.get('http://localhost:3003/resep')
    resepList.value = res.data
  }

  const hapusResep = async (id) => {
    await axios.delete(`http://localhost:3003/resep/${id}`)
    ambilData()
  }

  const tambahFavorit = async (resep) => {
  await axios.patch(`http://localhost:3003/resep/${resep.id}`, {
    favorit: !resep.favorit
  })
  await ambilData()
}


  // 👇 Tambahkan ini!
  const resepFavorit = computed(() => {
    return resepList.value.filter((r) => r.favorit)
  })

  return { resepList, ambilData, hapusResep, tambahFavorit, resepFavorit }
})
