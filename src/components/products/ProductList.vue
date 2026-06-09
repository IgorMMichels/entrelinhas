<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from './ProductCard.vue'
import { addFavorito, produtos, removeFavorito } from '@/data/products.js'
import { addCarrinho } from '@/utils/cartUtils.js'
const listaProdutos = produtos.value
const route = useRoute()

const produtosFiltrados = computed(() => {
  const search = String(route.query.search || '').toLowerCase()

  return listaProdutos.filter((produto) => produto.titulo.toLowerCase().includes(search))
})
</script>

<template>
  <div id="produtos" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <ProductCard
      v-for="produto in produtosFiltrados"
      :key="produto.id - 1"
      :capa="produto.capa"
      :titulo="produto.titulo"
      :preco="produto.preco"
      :autor="produto.autor"
      :resenha="produto.resenha"
      :favorito="produto.favorito"
      @adicionar-carrinho="addCarrinho(produto.id, 1)"
      @remove-favorito="removeFavorito(produto.id)"
      @add-favorito="addFavorito(produto.id)"
    ></ProductCard>
  </div>
      <p v-if="produtosFiltrados.length === 0" class="text-center w-full">
      Nenhum produto encontrado
    </p>
</template>

<style scoped></style>
