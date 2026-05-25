<script setup lang="ts">
import { carrinho } from '@/utils/cartUtils'
import { ref } from 'vue'
import Button from '../ui/button/Button.vue';
const carrinhos = ref(carrinho)
</script>

<template>
  <div class="summary bg-background">
    <h3>Total da Compra</h3>
    <div class="flex flex-col justify-evenly h-full">
      <div>Produtos:</div>
      <div>Frete: R$ 0,00</div>
       <Button variant="outline" class="w-full">Ir Ao Pagamento</Button>
    </div>
  </div>
</template>

<style scoped>
.summary {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 2rem 5rem;
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
