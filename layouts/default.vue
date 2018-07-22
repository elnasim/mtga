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

<style>
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
</style>

