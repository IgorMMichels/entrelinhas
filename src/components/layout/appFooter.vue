<script setup></script>

<template>
  <footer>
    <img  @click="$router.push('/')" src="/logoentrelinhas.png" alt="logo" />
    <div class="linha"></div>
    <div class="flex justify-between" >
      <nav class="flex gap-4">
        <RouterLink to="/">Termos</RouterLink>
        <RouterLink to="/">Equipe</RouterLink>
        <RouterLink to="/">Envio</RouterLink>
        <RouterLink to="/">Devoluções</RouterLink>
      </nav>
      <h4>&copy; 2026 Entrelinhas, Todos os Direitos Reservados.</h4>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    margin: 2rem 5rem 1rem 5rem;
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

</style>
