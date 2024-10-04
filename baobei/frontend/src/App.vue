<script setup lang="ts">
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isLoginPage = computed(() => {
  console.log(route.path === '/login');
  
      return route.path === '/login';
});
</script>

<template>
  <Header />
  <Main />
  <Footer v-if="!isLoginPage" />
</template>
