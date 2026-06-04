<script setup lang="ts">
import { computed } from 'vue'
import Button from '../ui/button/Button.vue';
import { carrinho } from '@/utils/cartUtils';
import { formataPreco } from '@/utils/currencyUtils';
import { comingSoon } from '@/utils/comingSoon.js';
const valorTotal = computed(() =>
  carrinho.value.reduce((total, item) => total + item.precoTotal, 0)
)
</script>

<template>
  <div class="summary w-100 h-100 bg-background flex flex-col justify-between" >
    <h3>Total da Compra</h3>
    <div class="linha"></div>
    <div>Produtos: {{ formataPreco(valorTotal) }}</div>
    <div class="linha"></div>
    <div>Frete: R$ 0,00</div>
    <div class="linha"></div>
    <div class="flex flex-col justify-end h-full">
        <div class="linha"></div>
        <h3>Total:  {{ formataPreco(valorTotal) }}</h3>
       <Button variant="outline" class="w-full" @click="comingSoon()">Ir Ao Pagamento</Button>
    </div>
  </div>
</template>

<style scoped>
.summary {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 2rem;
}

.linha {
  margin: .5rem 0;
  padding: .5px;
  background: rgb(116, 116, 116);
}

h3 {
  margin: 0 0 1rem 0;
}

button {
  background-color: #588157;
  color: var(--bg-color);
  cursor: pointer;
  transition: 0.3s all ease;
  margin-bottom: 0;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: rgba(173, 255, 172, 0.8) 0px 5px 15px;
}
</style>
