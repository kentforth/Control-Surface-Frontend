<template>
  <q-page class="page">
    <div class="sketches">
      <!--SIDEBAR-->
      <AdminSidebar/>

      <!--TABLE-->
      <div class="content">
        <div class="add-sketch">
          <router-link
            type="a" to="/admin/sketches/add"
             class="link-add">
            <span>Add Sketch</span>
            <i class="fas fa-plus"></i>
          </router-link>
        </div>

        <!--TABLE-->
        <div class="table">
          <q-markup-table class="table-body">
            <thead>
            <tr>
              <th class="text-left table-column">#</th>
              <th class="text-right table-column">Title</th>
              <th class="text-right table-column">Tutorial URL</th>
              <th class="text-right table-column">Image</th>
              <th class="text-right table-column">Category</th>
              <th class="text-right table-column">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="sketch in sketches" :key="sketch.id" class="table-row">
              <td>{{sketch._id}}</td>
              <td>{{sketch.title}}</td>
              <td>{{sketch.tutorialUrl}}</td>
              <td class="preview-image"><img :src="sketch.image" alt="" class="image"></td>
              <td>{{sketch.category}}</td>
              <td>
                <router-link
                  class="btn-actions"
                  :to="`/admin/video/edit/${sketch._id}`"><i class="fas fa-edit"></i></router-link>
                <button class="btn-actions"
                ><i class="fas fa-trash"></i></button>
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
    name: "Sketches",
    components: {AdminSidebar},
    meta: {
      title: 'Sketches'
    },
    data() {
      return {
        sketches: [
          {
            _id: '5f5b92527a4e3034a487544d',
            title: 'One Button',
            tutorialUrl: 'tutorial url',
            image: 'http://www.tagindex.net/css/img/image/photo.jpg',
            previewImage: 'http://www.tagindex.net/css/img/image/photo.jpg',
            category: 'Buttons'
          }
        ]
      }
    }
  }
</script>

<style scoped>

  .sketches {
    display: flex;
  }

  .content {
    width: 80%;
    height: calc(100vh - var(--height));
    background-color: var(--primary);
  }

  .add-sketch {
    width: 100%;
    text-align: center;
    margin-top: 3em;
  }

  .link-add {
    font-size: 1.5rem;
    background-color: var(--button-add);
    padding: 0.5em 1em;
    border-radius: 5px;
    -webkit-box-shadow: 0 0 5px 0 #000000;
    box-shadow: 0 0 5px 0 #000000;
    text-transform: uppercase;
  }


  .fa-plus {
    margin-left: 12px;
  }

  .table {
    width: 90% !important;
    margin: 3em auto 0 auto;

  }

  .table-body {
    background: linear-gradient(90.76deg, #768AA3 0.01%, #7976A3 97.45%);
    height: 600px;
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
    padding: 7px;
  }

  th {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 2;
    padding: 10px 7px;
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

  th:nth-child(4) {
    width: 100px;
  }

  th:nth-child(6) {
    width: 110px;
  }



  .preview-image {
    display: flex;
    width: 100%;
    justify-content: center;
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
    margin-left: 7px;
  }

  .image {
    width: 70px;
    height: 40px;
  }
</style>
