<template>
  <div class="tutorials">
    <Navigation/>
    <div class="videos">
      <div class="container">
        <div class="video-item" v-for="(video, videoIndex) in videos" :key="videoIndex">
          <iframe width="380" height="280"
                  :src="video.url">
          </iframe>
          <h1 class="title">{{video.title}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navigation from "components/Navigation";
  import VideoService from "src/services/VideoService/VideoService";

  export default {
    name: 'Tutorials',
    components: {Navigation},
    meta: {
      title: 'Tutorials'
    },
    data() {
      return {
        videos: []

      }
    },
    methods: {
      getAllVideos() {
        VideoService.getAllVideos()
          .then(response => {
            this.videos = response.data;

          }).catch(error => {
          console.log(error)
        })
      },
    },
    mounted() {
      this.getAllVideos();

    }
  }
</script>
<style scoped>

  .tutorials {
    background-color: var(--dark);

  }

  .videos {
    height: calc(100vh - var(--height));
    padding-top: 4em;
  }

  .container {
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }

  .video-item {
    width: 100%;
  }

  .title {
    margin: 0;
    font-size: 1.5rem;
    line-height: 2rem;
  }
</style>
