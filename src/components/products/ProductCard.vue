<script setup lang="ts">
import { Card } from '@/components/ui/card'
import Button from '../ui/button/Button.vue'
defineProps(['id', 'autor', 'titulo', 'resenha', 'preco', 'capa'])
import { HugeiconsIcon } from '@hugeicons/vue'
import { Heart } from '@hugeicons/core-free-icons'
import { formataPreco } from '@/utils/currencyUtils'
defineEmits(['adicionarCarrinho'])
</script>

<template>
  <Card class="flex flex-col justify-between grow w-full max-w-sm m-0 p-0 overflow-hidden">
    <img
      :src="capa"
      alt=""
      class="w-full h-100 object-cover rounded-t-md transition-transform duration-300 hover:scale-105"
    />
    <div class="w-full p-5 pt-0">
      <h1>{{ titulo }}</h1>
      <div class="w-full flex justify-between">
        <h4> {{ autor }}</h4>
        <HugeiconsIcon :icon="Heart" color="#4b0001" style="cursor: pointer" />
      </div>
      <h4 class='price'>{{ formataPreco(preco) }}</h4>
      <h3> {{ resenha }} </h3>
      <Button variant="outline" class="w-full" @click="$emit('adicionarCarrinho')">Adicionar ao carrinho</Button>
    </div>
  </Card>
</template>

<style scoped>
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

h1 {
  font-size: 22px;
  color: var(--font-color);
}

h3 {
  font-size: 14px;
  margin: 1rem 0;
  width: 90%;
}

.price {
 font-size: 22px;
}
</style>
