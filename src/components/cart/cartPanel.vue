<script setup lang="ts">
import { carrinho } from '@/utils/cartUtils'
import cartItem from './cartItem.vue'
import CartSummary from './cartSummary.vue'
import { ref } from 'vue'
import { aumentaQuantidade, diminuiQuantidade } from '@/utils/cartUtils'
const carrinhos = ref(carrinho)
</script>

<template>
  <div class="min-h-50 panel flex justify-between bg-background">
    <div>
      <h3>Carrinho</h3>
      <div class="pt-5 flex justify-between">
        <h4>Produto</h4>
        <h4>Total</h4>
      </div>
      <div class="flex flex-col justify-center">
      <cartItem
        v-for="produto in carrinhos"
        :key="produto.id"
        :capa="produto.capa"
        :titulo="produto.titulo"
        :preco="produto.preco"
        :autor="produto.autor"
        :resenha="produto.resenha"
        :quantidade="produto.quantidade"
        @aumenta-quantidade="aumentaQuantidade(produto.id)"
        @diminui-quantidade="diminuiQuantidade(produto.id)"
      >
      </cartItem>
      </div>

    </div>
    <div class="flex flex-col justify-center">
          <CartSummary />
    </div>

  </div>
</template>

<style scoped>
.panel {
  padding: 1rem 2rem;
  margin: auto 5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
