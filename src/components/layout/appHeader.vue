<script setup>
import { HugeiconsIcon } from '@hugeicons/vue'
import {
  FavouriteIcon,
  ShoppingCart02Icon,
  UserIcon,
} from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-vue-next'
import { ref } from 'vue'
const search = ref('')

</script>

<template>
  <header>
    <div>
      <img @click="$router.push('/')" src="/logoentrelinhas.png"  alt="icon" />
    </div>
    <div>
      <ButtonGroup>
        <Input placeholder="Pesquisar" v-model="search" @keyup.enter="$router.replace('/'+'?search='+search)"/>
        <Button variant="outline" class='bg-background' aria-label="Search" @click="$router.replace('/'+'?search='+search)" >
          <SearchIcon color="#4b0001" />
        </Button>
      </ButtonGroup>
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
      <router-link to="/favoritos">
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

input {
  width: 400px;
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
  cursor: pointer;
}

.iconTools {
  display: flex;
  gap: 16px;
}

button {
  background-color: #fbf5f0;
}
</style>
