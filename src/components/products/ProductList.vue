<script setup lang="ts">
import { computed, ref } from 'vue'
import produtos from '@/data/products'
import { addCarrinho } from '@/utils/cartUtils'
import { useRoute } from 'vue-router'
import ProductCard from './ProductCard.vue'
const listaProdutos = ref(produtos)
const route = useRoute()

const produtosFiltrados = computed(() => {
  const search = (route.query.search || '')

  return listaProdutos.value.filter(produto =>
    produto.titulo.includes(search)
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
      @adicionar-carrinho="addCarrinho(produto.id, 1)"
    ></ProductCard>
  </div>
</template>

<style scoped></style>
