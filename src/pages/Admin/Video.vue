<template>
  <q-page class="page">
    <div class="video">
      <!--SIDEBAR-->
      <AdminSidebar/>

      <!--ADD VIDEO-->
      <div class="add-video">
        <form @submit.prevent.stop="addVideo()">
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
          <q-btn
            color="light-green-9" :ripple="false" icon-right="add" label="Add Video" type="submit"
            :loading="loading"
            class="btn-add"
          />
        </form>


        <!--TABLE-->
        <div class="table">
          <q-markup-table class="table-body">
            <thead>
            <tr>
              <th class="text-left table-column">#</th>
              <th class="text-right table-column">Title</th>
              <th class="text-right table-column">URL</th>
              <th class="text-right table-column">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="video in videos" :key="video.id" class="table-row">
              <td>{{video._id}}</td>
              <td>{{video.title}}</td>
              <td>{{video.url}}</td>
              <td>
                <router-link
                  class="btn-actions"
                  :to="`/admin/video/edit/${video._id}`"><i class="fas fa-edit"></i></router-link>
                <button class="btn-actions"><i class="fas fa-trash"></i></button>
              </td>
            </tr>
            </tbody>
          </q-markup-table>

        </div>
      </div>


    </div>
  </q-page>
</template>

<script>
  import AdminSidebar from "components/AdminSidebar";
  import VideoService from "src/services/VideoService/VideoService";


  export default {
    name: "Video",
    components: {AdminSidebar},
    meta: {
      title: 'Video'
    },
    data() {
      return {
        loading: false,
        videoTitle: '',
        videoUrl: '',
        videos: [],
      }
    },
    methods: {

      //display all data of videos in table
      getAllVideos() {
        VideoService.getAllVideos()
          .then(response => {
            this.videos = response.data
          }).catch(error => {
          console.log(error)
        })
      },

      //add data of video to server
      addVideo() {
        this.$refs.title.validate()
        this.$refs.url.validate()
        if (this.$refs.title.hasError || this.$refs.url.hasError) {
          this.formHasError = true
        }
        else {
          VideoService.addVideo({
                                  title: this.videoTitle,
                                  url: this.videoUrl
                                })
            .then(response => {
              this[`loading`] = true;
              if (response.status === 201) {
                this.getAllVideos();
                this.$q.notify({
                                 message: 'Video has been added',
                                 icon: 'check',
                                 color: 'positive',
                                 timeout: '2000'
                               });
                this[`loading`] = false;
                this.videoTitle = ''
                this.videoUrl = ''
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
    },
    mounted() {
      this.getAllVideos();
    }
  }
</script>

<style scoped>
  .video {
    display: flex;
    background-color: var(--primary);
  }

  form {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 1em;
    height: 20%;
    margin-bottom: 2.5em;
  }

  .add-video {
    margin: 3em auto 0 auto;
    width: 80%;
  }

  .input {
    font-size: 1.5rem;
    width: 70%;
    justify-self: center;
    color: var(--dark);
  }

  .btn-add {
    max-width: 100%;
    font-size: 1.5rem;
    justify-self: center;
  }

  .table {
    width: 90% !important;
    margin: 8em auto 0 auto;

  }

  .table-body {
    background: linear-gradient(90.76deg, #768AA3 0.01%, #7976A3 97.45%);
    height: 460px;
    border: none;
    border-collapse: collapse;
    table-layout: fixed;
  }

  .table-column {
    font-size: 1.5rem;
    color: var(--light);
    background-color: var(--dark);
    text-align: left;
  }

  td {
    border-left: 1px solid rgba(0, 0, 0, 0.12);
    border-right: 1px solid rgba(0, 0, 0, 0.12);
  }

  th {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 2;
  }

  th:first-child {
    width: 100px;
  }

  th:last-child {
    width: 100px;
  }

  tr {
    color: var(--light);

  }

  .table-row td {
    font-size: 1.2rem;
  }

  .btn-actions {
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .btn-actions:active, .btn-actions:focus {
    outline: none;
    border: none
  }

  .fa-edit, .fa-trash {
    font-size: 1.5rem;
  }

  .btn-actions:last-child {
    margin-left: 20px;
  }

  .fa-trash {
    color: #F0801A;
  }

  .fa-edit {
    color: var(--accent);
  }

</style>
