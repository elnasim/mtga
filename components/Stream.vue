<template>
  <div class="stream-wrap">
    <nuxt-link :to="'streams/'+link" class="stream">
      <div class="stream-preview" :style="'background-image: url('+ getImage +')'"></div>
      <div class="stream-title">{{title}}</div>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      img: String,
      link: String
    },
    data() {
      return {}
    },
    computed: {
      getImage() {
        let img = this.img.slice(0, -20) + '512x288.jpg';
        return img;
      }
    }
  }
</script>

<style scoped lang="scss">

  .stream-wrap {
    width: 25%;
    padding: 0 15px;
  }

  .stream {
    display: block;
    margin-bottom: 30px;
    text-decoration: none;
  }

  .stream-preview {
    width: 100%;
    overflow: hidden;
    background-color: #000000;
    background-size: cover;
    background-position: center;
    &::after {
      content: '';
      padding-top: 80%;
      float: left;
    }
  }

  .stream-title {
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    color: #000000;
  }

</style>