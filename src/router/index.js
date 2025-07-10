import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import ResepListView from '../pages/ResepListView.vue'
import DetailResepView from '../pages/DetailResepView.vue'
import TambahResepView from '../pages/TambahResepView.vue'
import FavoritResepView from '../pages/FavoritResepView.vue'
import LoginView from '../pages/LoginView.vue'
import { useUserStore } from '../stores/userStore'

const routes = [
  { path: '/login', component: LoginView }, // 👈 tanpa auth
  { path: '/', component: HomeView, meta: { requiresAuth: true } },
  { path: '/resep', component: ResepListView, meta: { requiresAuth: true } },
  { path: '/resep/:id', component: DetailResepView, meta: { requiresAuth: true } },
  { path: '/tambah', component: TambahResepView, meta: { requiresAuth: true } },
  { path: '/favorit', component: FavoritResepView, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// ✅ Navigation Guard
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    next('/login') // redirect kalau belum login
  } else if (to.path === '/login' && userStore.isLoggedIn) {
    next('/') // kalau sudah login dan ke /login, redirect ke /
  } else {
    next()
  }
})

export default router
