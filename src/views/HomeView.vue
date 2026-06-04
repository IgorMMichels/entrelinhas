<script setup>
import appHeader from '@/components/layout/appHeader.vue';
import BannerSite from '@/components/layout/BannerSite.vue';
import ProductList from '@/components/products/ProductList.vue';
import appFooter from '@/components/layout/appFooter.vue';
 </script>

<template>
  <appHeader></appHeader>
  <BannerSite></BannerSite>
  <div id="produtos">
    <ProductList></ProductList>
  </div>
  <appFooter></appFooter>
</template>

<style scoped>
</style>

