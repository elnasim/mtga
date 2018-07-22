<template>
  <div class="container">
    <div class="mp-articles-grid">
      <Article 
              v-for="item in articles" 
              :key="item.id"
              :title="item.title"
              :image="item.img"
              :link="item.link"
      />
    </div>
  </div>
</template>

<script>

  import Article from "~/components/Article.vue";

  export default {
    components: {Article},
    data() {
      return {
        articles: this.$store.state.articles
      }
    }
  }
</script>

<style lang="scss">

  .mp-articles-grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 50px;
  }

</style>

