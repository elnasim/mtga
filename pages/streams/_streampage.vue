<template>
  <div class="stream-page">
    <iframe
    :src="'//player.twitch.tv/?channel=' + user_name"
    height="600"
    width="100%"
    frameBorder="<frameborder>"
    scrolling="<scrolling>"
    allowFullScreen="<allowfullscreen>">
    </iframe>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user_name: '',
        title: ''
      }
    },
    asyncData(context) {
      let ID = context.params.streampage;
      return {streamId: ID}
    },
    mounted() {
      const myHeaders = new Headers({
        'Client-ID': 'z97pdq1cei4wqu42l3kkkdnseq06bj'
      });

      const myInit = {
        method: 'GET',
        headers: myHeaders,
      };

      fetch('https://api.twitch.tv/helix/users?id=' + this.streamId, myInit)
          .then(res => res.json())
          .then((result) => {
            this.user_name = result.data[0]['login'];
          });
    }
  }
</script>

<style scoped lang="scss">

</style>