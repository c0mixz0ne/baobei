<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <header class="header">
    <div class="container">
      <RouterLink to="/">
        <img class="logo" src="@/assets/logo.png" alt="Логотип" />
      </RouterLink>
      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/about">О Нас</RouterLink>
        <RouterLink to="/login">Вход</RouterLink>
        <!-- <RouterLink to="/notfound">404</RouterLink> -->
      </nav>
    </div>
  </header>
</template>
