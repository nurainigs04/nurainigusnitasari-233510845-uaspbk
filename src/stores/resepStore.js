import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useResepStore = defineStore('resep', () => {
  const resepList = ref([])

  const ambilData = async () => {
    const res = await axios.get('https://jsonserver-production-8a4c.up.railway.app/resep')
    resepList.value = res.data
  }

  const hapusResep = async (id) => {
    await axios.delete(`https://jsonserver-production-8a4c.up.railway.app/resep/${id}`)
    ambilData()
  }

  const tambahFavorit = async (resep) => {
  await axios.patch(`https://jsonserver-production-8a4c.up.railway.app/resep/${resep.id}`, {
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
