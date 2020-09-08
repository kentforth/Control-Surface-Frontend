<template>
  <q-page class="page">
    <div class="video">
      <!--SIDEBAR-->
      <AdminSidebar/>

      <!--ADD VIDEO-->
      <div class="add-video">
        <q-input color="cyan-1" outlined v-model="text" class="input">
          <template v-slot:append>

          </template>
        </q-input>
        <q-btn
          color="light-green-9" :ripple="false" icon-right="add" label="Add Video"
          class="btn-add"
        />

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
            <tr v-for="video in videos" :key="video.id">
              <td>{{video.id}}</td>
              <td>{{video.title}}</td>
              <td>{{video.url}}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
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

  export default {
    name: "Video",
    components: {AdminSidebar},
    meta: {
      title: 'Video'
    },
    data() {
      return {
        text: '',
        videos: [
          {id: 1, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 2, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 3, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 4, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 5, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 1, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 2, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 3, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 4, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 5, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 1, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 2, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 3, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 4, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 5, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 1, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 2, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 3, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 4, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},
          {id: 5, title: 'Two Buttons', url: 'http://sdsafsdf/qwe'},

        ],

      }
    }
  }
</script>

<style scoped>
  .video {
    display: flex;
    background-color: var(--primary);
  }

  .add-video {
    margin: 3em auto;
    width: 80%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 3em;
    height: 20%;
  }

  .input {
    font-size: 2rem;
    width: 70%;
    justify-self: center;
    color: var(--dark);
  }

  .btn-add {
    max-width: 50%;
    justify-self: center;
  }

  .table {
    width: 90% !important;
    margin: 0 auto;
  }

  .table-body {
    background: linear-gradient(90.76deg, #768AA3 0.01%, #7976A3 97.45%);
    height: 580px;
    border: none;
    border-collapse: collapse;
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

</style>
