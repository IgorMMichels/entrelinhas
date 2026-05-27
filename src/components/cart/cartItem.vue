<script setup lang="ts">
import ButtonGroup from '@/components/ui/button-group/ButtonGroup.vue';
import ButtonGroupText from '@/components/ui/button-group/ButtonGroupText.vue'
import { MinusIcon, PlusIcon, Trash2Icon } from 'lucide-vue-next'
defineProps(['id', 'autor', 'titulo', 'resenha', 'preco', 'capa', 'quantidade'])
import Button from '@/components/ui/button/Button.vue'
import { formataPreco } from '@/utils/currencyUtils'
defineEmits(['aumentaQuantidade', 'diminuiQuantidade'])
</script>

<template>
  <div class="w-250 h-full pb-10 flex justify-between items-center">
    <img class="h-70 object-cover rounded-md" :src="capa" alt="">
    <div class="info h-75 flex flex-col justify-evenly">
      <h3 class="text-2xl">{{ titulo }}</h3>
      <h4 class="">{{ autor }}</h4>
      <p class="w-60">{{ resenha }}</p>
    </div>
    <div class="items-center">
      <ButtonGroup @click="$emit('aumentaQuantidade')">
        <Button  >
          <MinusIcon/>
        </Button>
        <ButtonGroupText class="min-w-16 justify-center rounded-none text-center bg-background"
          >{{ quantidade }}</ButtonGroupText
        >
        <Button @click="$emit('aumentaQuantidade')">
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </div>
    <div class=" flex justify-between gap-5 items-center">
       <Button>
        <Trash2Icon />
       </Button>
       <h4>{{ formataPreco(preco) }}</h4>
    </div>
  </div>
</template>

<style scoped>
</style>
