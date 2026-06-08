<script setup>
import { comingSoon } from '@/utils/comingSoon'
</script>

<template>
  <footer>
    <img @click="$router.push('/')" src="/logoentrelinhas.png" alt="logo" />
    <div class="linha"></div>
    <div class="flex justify-between">
      <nav class="flex gap-4">
        <RouterLink to="/" @click="comingSoon()">Termos</RouterLink>
        <RouterLink to="/" @click="comingSoon()">Equipe</RouterLink>
        <RouterLink to="/" @click="comingSoon()">Envio</RouterLink>
        <RouterLink to="/" @click="comingSoon()">Devoluções</RouterLink>
      </nav>
      <h4>&copy; 2026 Entrelinhas, Todos os Direitos Reservados.</h4>
    </div>
  </footer>
</template>

<style scoped>
main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
}
footer {
  margin: 2rem;
  width: calc(100% - 4rem);
}

.linha {
  padding: 1px;
  margin: 1rem 0;
  background-color: var(--color-brand);
  border-radius: 12px;
}
img {
  width: 100px;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  footer {
    margin: 0 0 0 0;
  }

  nav {
    display: none;
  }

  h4 {
    text-align: center;
    margin: 0 2rem;
  }

  img {
    display: block;
    margin: 0 auto;
  }
}
</style>
