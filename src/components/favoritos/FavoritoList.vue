<script setup lang="ts">
import { computed, ref } from 'vue'
import produtos from '@/data/products'
import { addCarrinho } from '@/utils/cartUtils'
import { useRoute } from 'vue-router'
import { addFavorito, favoritos, removeFavorito } from '@/utils/favoriteHandler.js'
import ProductCard from '../products/ProductCard.vue'
const listaProdutos = ref(favoritos)
const route = useRoute()

const produtosFiltrados = computed(() => {
  const search = String(route.query.search || '').toLowerCase()

  return listaProdutos.value.filter(produto =>
    produto.titulo.toLowerCase().includes(search)
  )
})
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <ProductCard
      v-for="produto in produtosFiltrados"
      :key="produto.id - 1"
      :capa="produto.capa"
      :titulo="produto.titulo"
      :preco="produto.preco"
      :autor="produto.autor"
      :resenha="produto.resenha"
      :favorito="produto.favorito"
      v-show="produto.favorito"
      @adicionar-carrinho="addCarrinho(produto.id, 1)"
      @remove-favorito="removeFavorito(produto.id)"
      @add-favorito="addFavorito(produto.id)"
    ></ProductCard>
  </div>
</template>
