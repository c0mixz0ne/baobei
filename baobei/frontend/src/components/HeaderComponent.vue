<template>
  <header class="header">
    <ContainerComponent>
      <RouterLink to="/">
        <img class="logo" src="@/assets/images/logo.jpg" alt="Логотип" />
      </RouterLink>
      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/login">Войти</RouterLink>
      </nav>
    </ContainerComponent>
  </header>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ContainerComponent from './layout/ContainerComponent.vue'
</script>
<style lang="scss" scoped>
.header {
  background-color: var(--gray);
  height: 90px;
  padding: 10px 0;
  border-bottom: 1px solid var(--pink);
  .logo {
    width: 100%;
    max-width: 62px;
    height: 70px;
    vertical-align: middle;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
      display: flex;
      gap: 15px;

      a {
        text-decoration: none;
        color: var(--black);
      }

      a.router-link-active {
        color: var(--pink);
      }
    }
  }
}

@include breakpoint(xs){
    .header{
      height: 60px;
      .logo{
        height: 40px;
      }
    }
}
</style>
