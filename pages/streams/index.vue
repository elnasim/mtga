<template>
  <div>
    <div class="isloading" v-show="isLoading">Загрузка...</div>
    <div class="container">
      <div class="streams">
        <Stream v-for="stream in streams"
                :key="stream.id"
                :title="stream.title"
                :img="stream.thumbnail_url"
                :link="stream.user_id"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Stream from "~/components/Stream";

  export default {
    components: {Stream},
    data() {
      return {
        streams: '',
        isLoading: true
      }
    },
    mounted() {
      const myHeaders = new Headers({
        'Client-ID': 'z97pdq1cei4wqu42l3kkkdnseq06bj'
      });

      const myInit = {
        method: 'GET',
        headers: myHeaders,
      };

      fetch('https://api.twitch.tv/helix/streams?game_id=2748&language=ru', myInit)
          .then(res => res.json())
          .then((result) => {
            console.log('-->', result.data);
            this.streams = result.data;
            this.isLoading = false
          });
    }
  }
</script>

<style scoped lang="scss">

  .streams {
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    min-height: 80vh;
  }

</style>