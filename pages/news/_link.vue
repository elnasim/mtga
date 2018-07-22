<template>
  <div class="article-page">
    <div class="article-page-img" :style="'background-image: url('+ getContent.img +')'"></div>
    <div class="container">
      <h1 class="article-page-title">{{getContent.title}}</h1>
      <div class="article-page-content" v-html="getContent.content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: this.$store.state.articles,
      }
    },
    asyncData: function (context) {
      let link = context.params.link;
      return {link: link};
    },
    computed: {
      getContent() {
        const content = this.data.filter(item => item.link === this.link);
        return content[0];
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss">
  .article-page{
    min-height: 90vh;
  }
  
  .article-page-img {
    width: 100%;
    background-color: #000000;
    overflow: hidden;
    height: 300px;
    background-size: 100%;
    background-position: center;
    margin-bottom: 30px;
  }

  .article-page-title {
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    font-family: 'Oswald', sans-serif;
    margin-bottom: 15px;
  }

  .article-page-content {
    width: 100%;
    max-width: 800px;
    margin: auto;
    padding: 0 15px 60px;
    text-align: justify;
    font-size: 18px;
    p {
      padding: 10px 0;
      width: 100%;
    }
    img {
      margin: 0 auto;
      display: block;
      max-width: 80%;
    }
  }
</style>