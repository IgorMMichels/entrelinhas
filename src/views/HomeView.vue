<script setup>
import appHeader from '@/components/layout/appHeader.vue';
import BannerSite from '@/components/layout/BannerSite.vue';
import ProductList from '@/components/products/ProductList.vue';
import appFooter from '@/components/layout/appFooter.vue';
 </script>

<template>
  <appHeader></appHeader>
  <main></main>
  <BannerSite></BannerSite>
  <ProductList></ProductList>
  <appFooter class="mt-auto">

  </appFooter>
</template>

<style scoped>
</style>

