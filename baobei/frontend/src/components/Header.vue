<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <header class="header">
    <div class="container">
      <RouterLink to="/">
        <img class="logo" src="@/assets/images/logo.png" alt="Логотип" />
      </RouterLink>
      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <!-- <RouterLink to="/about">О Нас</RouterLink> -->
        <RouterLink to="/login">Войти</RouterLink>
        <!-- <RouterLink to="/notfound">404</RouterLink> -->
      </nav>
    </div>
  </header>
</template>
