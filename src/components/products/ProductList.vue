<script setup lang="ts">
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'
import produtos from '@/data/products'
import { addCarrinho } from '@/utils/cartUtils'
const listaProdutos = ref(produtos)
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <ProductCard
      v-for="produto in listaProdutos"
      :key="produto.id - 1"
      :capa="produto.capa"
      :titulo="produto.titulo"
      :preco="produto.preco"
      :autor="produto.autor"
      :resenha="produto.resenha"
      @adicionar-carrinho="addCarrinho(produto.id, 1)"
    ></ProductCard>
  </div>
</template>

<style scoped></style>
