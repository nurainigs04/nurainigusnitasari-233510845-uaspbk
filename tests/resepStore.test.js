import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useResepStore } from '../src/stores/resepStore'

describe('Resep Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('menambah resep ke favorit', () => {
    const store = useResepStore()
    const dummyResep = { id: 1, judul: 'Nasi Goreng' }
    store.tambahFavorit(dummyResep)
    expect(store.resepFavorit).toContain(dummyResep)
  })
})
