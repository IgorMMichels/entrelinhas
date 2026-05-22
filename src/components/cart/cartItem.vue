<script setup lang="ts">
import ButtonGroup from '@/components/ui/button-group/ButtonGroup.vue';
import ButtonGroupText from '@/components/ui/button-group/ButtonGroupText.vue'
import { MinusIcon, PlusIcon, Trash2, Trash2Icon } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
import { ref } from 'vue'
</script>

<template>
  <div class="w-250 h-full pb-10 flex justify-between items-center">
    <img class="h-75 object-cover rounded-md" src="/imgTemplate.png" alt="">
    <div class="info h-75 flex flex-col justify-evenly">
      <h3 class="text-2xl">Harry Potter e a Pedra Filosofal</h3>
      <h4 class="">J.K. Rowling</h4>
      <p class="w-60">Livro clássico de fantasia que introduz um universo mágico e atemporal, narrando o amadurecimento de um jovem bruxo e sua luta contra as forças das trevas.</p>
    </div>
    <div class="items-center">
      <ButtonGroup>
        <Button>
          <MinusIcon />
        </Button>
        <ButtonGroupText class="min-w-16 justify-center rounded-none text-center bg-background"
          >1</ButtonGroupText
        >
        <Button>
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </div>
    <div class=" flex justify-between gap-5 items-center">
       <Button>
        <Trash2Icon />
       </Button>
       <h4>69.90</h4>
    </div>
  </div>
</template>

<style scoped>
</style>
