<template>
  <header class="header">
    <nuxt-link to="/" class="header-link">Главная</nuxt-link>
    <nuxt-link to="/cards" class="header-link">Карты</nuxt-link>
    <nuxt-link to="/streams" class="header-link">Стримы</nuxt-link>
  </header>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .header {
    background-color: #00685a;
    height: 70px;
    min-height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-link {
    text-decoration: none;
    color: #f4f4f4;
    margin: 0 15px;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
  }

</style>