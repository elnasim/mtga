<template>
  <nuxt-link :to="'news/'+link" class="article-preview" :style="'background-image: url('+image+')'">
    <div class="article-preview-title">{{title}}</div>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      title: String,
      image: String,
      link: String
    }
  }
</script>

<style lang="scss">
  .article-preview {
    width: 49.5%;
    overflow: hidden;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #ffffff;
    font-size: 24px;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-family: 'Oswald', sans-serif;
    background-size: cover;
    background-position: center;
    position: relative;
    &::after {
      content: '';
      padding-top: 50%;
      float: left;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(#000, .7);
    }
  }
  
  .article-preview-title{
    z-index: 1;
  }
  
  @media (max-width: 991px) {
    .article-preview{
      width: 100%;
    }
  }
</style>