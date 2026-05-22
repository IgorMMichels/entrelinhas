<script setup lang="ts">
  import cartItem from './cartItem.vue';
</script>

<template>
  <div class="min-h-50 panel flex justify-between bg-background">
    <div>
      <h3>Carrinho</h3>
      <div class="pt-5 flex justify-between">
        <h4>Produto</h4>
        <h4>Total</h4>
      </div>
      <cartItem></cartItem>
    </div>
    <div class='summary bg-background'>
      <h3>Total da Compra</h3>

    </div>
  </div>
</template>

<style scoped>
  .panel {
    padding: 1rem 5rem;
    margin: auto 5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .summary {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 2rem 5rem;
  }
</style>
