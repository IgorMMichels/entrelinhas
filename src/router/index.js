import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import CarrinhoView from '@/views/CarrinhoView.vue'
import FavoritoView from '@/views/FavoritoView.vue'

const routes = [
  { path: '/', component: HomeView},
  { path: '/carrinho', component: CarrinhoView},
  { path: '/favoritos', component: FavoritoView},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
