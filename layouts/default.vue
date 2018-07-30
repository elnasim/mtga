<template>
  <div class="app">
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
  import Header from "~/components/Header.vue";
  import Footer from "~/components/Footer.vue";

  export default {
    components: {Header, Footer}
  }
</script>

<style lang="scss">
  html {
    font-size: 16px;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: auto;
  }

  .isloading {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(#000, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    z-index: 999;
    font-size: 40px;
  }
</style>

