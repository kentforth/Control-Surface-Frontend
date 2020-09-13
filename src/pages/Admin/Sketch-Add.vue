<template>
  <div class="sketch-add">
    <!--ADMIN SIDEBAR-->
    <AdminSidebar/>

    <!--CONTENT-->
    <div class="content">
      <div class="form">
        <q-form
          @submit.prevent="addSketch"
        >
          <div class="title">
            <div class="title__text">
              <q-input
                color="dark" dark outlined v-model="title" label="Title" class="input"
                ref="title"
                :rules="[val => !!val || 'Field is required']"
                type="text"
              >
              </q-input>

              <q-input
                color="dark" dark outlined v-model="tutorialUrl" label="Tutorial URL" class="input"
                ref="tutorialUrl"
                :rules="[val => !!val || 'Field is required']"
              >
              </q-input>
            </div>
            <div class="title-file">
              <label for="file-input">
                <img src="../../assets/images/add image.png" alt="upload image">
              </label>

              <input
                id="file-input"
                type="file"
                @change="selectFile"
                multiple
                accept="image/jpg,image/jpeg,/image/png"
              />
              <p>{{file}}</p>
            </div>

            <!--SKETCH TEXT-->
            <div class="textarea">
              <q-input
                color="dark" dark outlined v-model="sketchText" label="Sketch Text"
                class="input text"
                ref="text"
                :rules="[val => !!val || 'Field is required']"
                type="textarea"
              >
              </q-input>
            </div>
          </div>

          <!--DROPDOWN MENU-->
          <q-select
            color="dark"
            bg-color="cyan-1"
            label-color="dark"
            v-model="category"
            :options="options"
            rounded
            outlined
            id="category"
            class="category"
            label="Category"
          >
          </q-select>

          <div class="button">
            <q-btn
              color="light-green-6" :ripple="false" icon-right="save" label="Save Sketch"
              type="submit"
              class="btn-add"
            />
          </div>

        </q-form>
      </div>
    </div>
  </div>
</template>

<script>
  import AdminSidebar from "components/AdminSidebar";

  export default {
    name: "Sketch-Add",
    components: {AdminSidebar},
    meta: {
      title: 'Add Sketch'
    },
    data() {
      return {
        title: '',
        tutorialUrl: '',
        file: null,
        sketchText: '',
        category: 'Category',
        options: [
          'Potentiometers', 'Buttons', 'Encoders', 'Switches', 'Leds', 'Banks', 'Displays',
          'Multiplexers'
        ]
      }
    },
    methods: {
      addSketch() {
        console.log('add Sketch');
      },
      selectFile(e) {
        this.file = e.target.files[0].name;
      },
    }
  }
</script>

<style scoped>
  .sketch-add {
    display: flex;
  }

  .content {
    width: 80%;
    background-color: var(--primary);
  }

  .form {
    width: 70%;
    margin: 2em auto;
  }

  .input {
    margin-bottom: 1.5em;
    font-size: 1.5rem;
  }


  .q-field--outlined:focus, .q-field--outlined:focus:active {
    border: none;
  }


  .btn-add {
    font-size: 1.5rem;
    width: 100%;
   color:var(--light) !important;
  }

  .button {
    width: 25%;
    margin: 0 auto;
  }

  .title {
    display: grid;
    grid-template-columns: 1fr 0.2fr;
    grid-column-gap: 5em;
    align-items: center;
  }

  .title p {
    font-size: 1.3rem;
    font-family: 'IBM Plex Sans', sans-serif;
    color: var(--dark);
    font-weight: 500;
  }

  .title-file {
    width: 100%;
  }

  .title-file img {
    width: 100%;
  }

  .title-file > input {
    display: none;
  }

  .title-file img {
    width: 80%;
    cursor: pointer;
  }

  .title-file p {
    margin: 0;
    padding: 0;
  }

  .textarea {
    display: flex;
    flex-direction: column;
  }

  textarea {
    resize: none;
  }

  .text {
    font-size: 1.2rem;
  }

  .category {
    font-size: 1.3rem;
    margin-bottom: 2em;
    width: 30%;
  }



</style>
