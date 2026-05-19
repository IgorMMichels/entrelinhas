<script setup>
import { HugeiconsIcon } from '@hugeicons/vue'
import {
  FavouriteIcon,
  Notification03Icon,
  SearchingIcon,
  ShoppingCart02Icon,
  UserIcon,
} from '@hugeicons/core-free-icons'
import InputSearch from './ui/input/InputSearch.vue'
</script>

<template>
  <header>
    <div>
      <img @click="$router.push('/')" src="/logoentrelinhas.png" alt="icon" />
    </div>
    <div>
      <InputSearch type="text" placeholder="Pesquisar"></InputSearch>
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
      <router-link to="/carrinho">
        <HugeiconsIcon :icon="ShoppingCart02Icon" color="#4b0001" style="cursor: pointer" />
      </router-link>
      <router-link to="/carrinho">
        <HugeiconsIcon :icon="FavouriteIcon" color="#4b0001" style="cursor: pointer" />
      </router-link>
      <router-link to="/carrinho">
        <HugeiconsIcon :icon="UserIcon" color="#4b0001" style="cursor: pointer" />
      </router-link>
    </div>
  </header>
</template>

<style scoped>
a {
  color: #4b0001;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 5rem 2rem 5rem;
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
