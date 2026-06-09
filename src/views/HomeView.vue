<script setup>
import { ref } from 'vue'
import appHeader from '@/components/layout/appHeader.vue';
import BannerSite from '@/components/layout/BannerSite.vue';
import ProductList from '@/components/products/ProductList.vue';
import appFooter from '@/components/layout/appFooter.vue';

const productListRef = ref(null)

function scrollToProdutos() {
  productListRef.value?.gridRef?.scrollIntoView({ behavior: 'smooth' })
}
 </script>

<template>
  <appHeader></appHeader>
  <main></main>
  <BannerSite @scroll-to-produtos="scrollToProdutos"></BannerSite>
  <ProductList ref="productListRef"></ProductList>
  <appFooter class="mt-auto">

  </appFooter>
</template>

<style scoped>
</style>

