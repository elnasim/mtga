<template>
  <div class="stream-page">
    <div class="stream-page-title">{{user_name}}</div>
    <div class="stream">      
      <iframe class="stream-iframe"
              :src="'//player.twitch.tv/?channel=' + user_name"
              height="600"
              width="100%"
              frameBorder="<frameborder>"
              scrolling="<scrolling>"
              allowFullScreen="<allowfullscreen>">
      </iframe>
    </div>
    <div class="chat">
      <iframe class="stream-chat"
              scrolling="<scrolling>"
              id="chat_embed"
              :src="'http://www.twitch.tv/embed/'+ user_name +'/chat'">
      </iframe>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user_name: '',
        viewers: ''
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
  .stream-page {
    display: flex;
    flex-wrap: wrap;
    padding: 50px 0;
  }
  
  .stream-page-title{
    width: 100%;
    margin-bottom: 30px;
    text-align: center;
    padding: 0 15px;
    font-size: 36px;
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
  }

  .stream {
    width: 60%;
    padding: 0 20px;
  }

  .stream-iframe {
    border: none;
  }

  .chat {
    width: 40%;
    padding: 0 20px;
  }
  
  .stream-chat{
    width: 100%;
    height: 100%;
    border: none;
  }

</style>