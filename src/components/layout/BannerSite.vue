<script setup lang="ts">
import Button from '../ui/button/Button.vue'

const emit = defineEmits(['scroll-to-produtos'])
</script>

<template>
  <div class="banner flex justify-between items-center">
    <div>
      <h2>Onde as grandes histórias ganham vida</h2>
      <h4>
        O portal para os seus novos mundos literários. O universo dos seus autores favoritos a
        apenas um clique de distância.
      </h4>
      <Button class="w-100 to-background" @click="emit('scroll-to-produtos')">Acessar Livros</Button>
    </div>
    <div>
      <img src="/banner.png" alt="">
    </div>
  </div>

</template>

<style scoped>

button {
  background-color: #750505;
  transition: 0.3s all ease;
  cursor: pointer;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: rgb(117, 5, 5, 0.5) 0px 5px 15px;
}

.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 3rem 5rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

h2 {
  font-size: 90px;
  margin: 2rem 0 0 0;
  font-family: 'Reverie';
  color: #750505;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

h4 {
  color: #750505;
  margin: 1rem 15rem 3rem 0;
  font-size: 27px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

img {
  margin: 0 1rem 0 3rem;
  max-width: 100%;
}

@media screen and (max-width: 768px) {
  .banner {
    flex-direction: column;
    padding: 2rem 1.5rem;
    text-align: center;
  }

  h2 {
    font-size: 38px;
    text-align: center;
    width: 100%;
  }

  h4 {
    font-size: 17px;
    margin: 1rem 2rem 2rem 2rem;
  }

  img {
    margin: 1.5rem 0 0 0;
    width: 100%;
  }

  button{
    width: 100%;
  }
  }


</style>
