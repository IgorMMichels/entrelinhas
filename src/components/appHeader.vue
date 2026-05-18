<script setup>
import { HugeiconsIcon } from '@hugeicons/vue'
import { FavouriteIcon, Notification03Icon, SearchingIcon, ShoppingCart02Icon, UserIcon } from '@hugeicons/core-free-icons'
import InputSearch from './ui/input/InputSearch.vue';
</script>

<template>
  <header>
    <div>
      <img @click="$router.push('/')" src="/logoentrelinhas.png" alt="icon" />
    </div>
    <div>
      <InputSearch></InputSearch>
    </div>
    <div>
      <nav>
        <RouterLink to="/">Termos</RouterLink>
        <RouterLink to="/">Equipe</RouterLink>
        <RouterLink to="/">Envio</RouterLink>
        <RouterLink to="/">Devoluções</RouterLink>
      </nav>
    </div>
    <div class="iconTools">
      <HugeiconsIcon @click="router.push('/carrinho')" :icon="ShoppingCart02Icon" color="#cdb185" />
      <HugeiconsIcon :icon="FavouriteIcon" color="#cdb185"/>
      <HugeiconsIcon :icon="UserIcon" color="#cdb185"/>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  margin: 2rem 5rem;
}

header nav {
  display: flex;
  gap: 16px;
}

img {
  width: 100px;
}

.iconTools {
  display: flex;
  gap: 16px;
}

</style>
