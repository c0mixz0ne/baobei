<template>
  <button @click="$emit('action')" class="button">
    <slot>Кнопка</slot>
  </button>
</template>
<style lang="scss" scoped>
.button {
  color: var(--white);
  background-color: var(--button-pink);
  border: none;
  padding: 20px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  max-width: 250px;
}
</style>
