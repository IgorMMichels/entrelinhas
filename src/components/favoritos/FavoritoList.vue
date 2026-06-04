<script setup lang="ts">
import { computed } from 'vue'
import { addCarrinho } from '@/utils/cartUtils'
import { useRoute } from 'vue-router'
import ProductCard from '../products/ProductCard.vue'
import { addFavorito, produtos, removeFavorito } from '@/data/products.js'
const route = useRoute()

const produtosFiltrados = computed(() => {
  const search = String(route.query.search || '').toLowerCase()
  
  return produtos.value.filter((produto) => produto.titulo.toLowerCase().includes(search))
})

const temFavoritos = computed(() => produtosFiltrados.value.some((p) => p.favorito))
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
  <p v-if="!temFavoritos" class="text-center w-full">
    Nenhum favorito encontrado
  </p>
</template>
