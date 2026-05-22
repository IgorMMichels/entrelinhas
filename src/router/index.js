import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import CarrinhoView from '@/views/CarrinhoView.vue'

const routes = [
  { path: '/', component: HomeView},
  { path: '/carrinho', component: CarrinhoView},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
