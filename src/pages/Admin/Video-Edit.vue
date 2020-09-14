<template>
  <div class="video-edit">

    <!--ADMIN SIDEBAR-->
    <AdminSidebar/>

    <!--CONTENT-->
    <div class="content">
      <form @submit.prevent.stop="updateVideo" class="form">
        <q-input
          color="cyan-1" outlined v-model="videoTitle" class="input" :rules="[ val => val
            !== null && val !== '' || 'Please type something']"
          ref="title"
          label="Title"
        >
        </q-input>
        <q-input
          color="cyan-1" outlined v-model="videoUrl" class="input" :rules="[ val => val
            !== null && val !== '' || 'Please type something']"
          ref="url"
          label="URL"
        >
        </q-input>
        <div class="buttons">
          <router-link to="/admin/video">
            <q-btn
              color="cyan-1" type="a" :ripple="false" label="Cancel"
              class="btn"
            />
          </router-link>

          <q-btn
            color="accent" :ripple="false" icon-right="refresh" label="Update" type="submit"
            :loading="loading"
            class="btn"
          />
        </div>

      </form>
    </div>

  </div>
</template>

<script>
  import AdminSidebar from "components/AdminSidebar";
  import VideoService from "src/services/VideoService/VideoService";

  export default {
    name: "Video-Edit",
    components: {AdminSidebar},
    meta: {
      title: 'Edit Video'
    },
    data() {
      return {
        loading: false,
        videoTitle: '',
        videoUrl: ''
      }
    },
    mounted() {
      let videoId = this.$route.params.id
      VideoService.getSingleVideo(videoId).then(result => {
        this.videoTitle = result.data.title;
        this.videoUrl = result.data.url;
      });
    },
    methods: {
      updateVideo() {
        this.$refs.title.validate()
        this.$refs.url.validate()
        if (this.$refs.title.hasError || this.$refs.url.hasError) {
          this.formHasError = true
        } else {
          let videoId = this.$route.params.id;
          VideoService.update(videoId, {
                                title: this.videoTitle,
                                url: this.videoUrl
                              }
          )
            .then(response => {
              this[`loading`] = true;
              if (response.status === 200) {
                this.$q.notify({
                                 message: 'Video has been updated',
                                 icon: 'check',
                                 color: 'positive',
                                 timeout: '2000'
                               });
                this[`loading`] = false;
                this.$router.push('/admin/video');
              }
            }).catch(error => {
            this.$q.notify({
                             message: 'Error: check console for details',
                             icon: 'clear',
                             color: 'red-6',
                             timeout: '2500'
                           });
            console.log(error)
          });
        }

      }
    }
  }
</script>

<style scoped>
  .video-edit {
    display: flex;
  }

  .content {
    background-color: var(--primary);
    width: 80%;
  }

  .form {
    width: 90%;
    margin: 3em auto;
  }

  .input {
    width: 80%;
    margin: 0 auto;
    font-size: 1.5rem !important;
  }

  .input:nth-child(2) {
    margin-top: 1em;
  }

  .buttons {
    text-align: center;
    width: 30%;
    height: 50px;
    margin: 2em auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5em;
    justify-content: center;
  }

  .buttons a {
    display: flex;
    justify-content: flex-end;
  }

  .btn {
    color: var(--primary) !important;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    width: 100%;
  }

  .btn:first-child {
    justify-self: end;
  }


</style>
