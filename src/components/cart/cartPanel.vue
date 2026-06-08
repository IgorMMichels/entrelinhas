<script setup lang="ts">
import { carrinho, aumentaQuantidade, diminuiQuantidade, excluirProduto } from '@/utils/cartUtils'
import cartItem from './cartItem.vue'
import CartSummary from './cartSummary.vue'
</script>

<template>
  <div class="min-h-50 panel flex items-start justify-between bg-background">
    <div class="flex-1">
      <h3>Carrinho</h3>
      <div class="pt-5 pr-10 flex justify-between">
        <h4>Produto</h4>
        <h4 v-if="carrinho.length === 0" class="center">
          Nenhum produto encontrado no carrinho
        </h4>
      </div>

      <div class="flex flex-col justify-center">
        <cartItem
          v-for="produto in carrinho"
          :key="produto.id"
          :capa="produto.capa"
          :titulo="produto.titulo"
          :preco="produto.preco"
          :autor="produto.autor"
          :resenha="produto.resenha"
          :quantidade="produto.quantidade"
          @aumenta-quantidade="aumentaQuantidade(produto.id)"
          @diminui-quantidade="diminuiQuantidade(produto.id)"
          @exclui-produto="excluirProduto(produto.id)"
        >
        </cartItem>
      </div>
    </div>
    <CartSummary class="sticky top-40 shrink-0 right-40" />
  </div>
</template>

<style scoped>
.panel {
  padding: 1rem 2rem;
  margin: auto 5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
