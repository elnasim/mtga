<template>
  <div>
    <div class="isloading" v-show="isLoading">Загрузка...</div>
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
  </div>
</template>

<script>
  import Article from "~/components/Article.vue";

  export default {
    components: {Article},
    data() {
      return {
        articles: [],
        isLoading: true
      }
    },
    beforeMount() {

    },
    mounted() {
      fetch('http://localhost:8000/articles').then(res => res.json()).then((result) => {
        this.articles = result;
        this.isLoading = false;
      })
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

