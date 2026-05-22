<script setup lang="ts">
import Button from '../ui/button/Button.vue'
</script>

<template>
  <div class="banner text-center">
    <div>
      <h2>Onde as grandes histórias ganham vida</h2>
      <h4>
        O portal para os seus novos mundos literários. O universo dos seus autores favoritos a
        apenas um clique de distância.
      </h4>
      <Button class="w-100 text-center to-background">Acessar Livros</Button>
    </div>
  </div>
</template>

<style scoped>

button {
  background-color: #750505;
}

.banner {
  margin: 2rem 0;
  justify-content: space-between;
  padding: 5rem;
  background: #4B0001;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(75, 0, 1, 0.3);
}

h2 {
  font-size: 100px;
  margin: 2rem 10rem;
  font-family: 'Reverie';
  color: #FFF5E6;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

h4 {
  color: #FFE4CC;
  margin: 2rem 15rem;
  font-size: 32px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
