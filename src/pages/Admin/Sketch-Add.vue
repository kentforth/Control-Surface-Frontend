<template>
  <div class="sketch-add">
    <!--ADMIN SIDEBAR-->
    <AdminSidebar/>

    <!--CONTENT-->
    <div class="content">
      <div class="form">
        <form
          @submit.prevent="addSketch"
        >
          <div class="title">
            <div class="title__text">
              <label for="title">Title</label>
              <input
                v-model="title" class="input"
                id="title"
                ref="title"
                type="text"
              >
              <label for="titleUrl">URL</label>
              <input
                v-model="tutorialUrl" class="input"
                ref="tutorialUrl"
                id="titleUrl"
              >

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
              <label for="textarea">Sketch</label>
              <textarea
                v-model="sketchText"
                rows="8"
                class="input text"
                id="textarea"
                ref="text"
              />

            </div>
          </div>

          <!--DROPDOWN MENU-->
          <CustomSelect :options="['Potentiometers', 'Buttons', 'Encoders', 'Switches', 'Leds',
          'Banks', 'Displays', 'Multiplexers']" class="category"/>
          <div class="button">
            <q-btn
              color="light-green-6" :ripple="false" icon-right="save" label="Save Sketch"
              type="submit"
              class="btn-add"
            />
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import AdminSidebar from "components/AdminSidebar";
  import CustomSelect from "components/CustomSelect";

  export default {
    name: "Sketch-Add",
    components: {CustomSelect, AdminSidebar},
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
    resize: none !important;
  }


  .q-field--outlined:focus, .q-field--outlined:focus:active {
    border: none;
  }


  .btn-add {
    font-size: 1.5rem;
    width: 100%;
    color: var(--light) !important;
  }

  .button {
    width: 25%;
    margin: 0 auto;
  }

  label {
    font-size: 1.4rem;
    margin-bottom: 5px;
  }

  .title__text {
    display: flex;
    flex-direction: column;
  }

  .title {
    display: grid;
    grid-template-columns: 1fr 0.2fr;
    grid-column-gap: 5em;
    align-items: center;
  }

  .input {
    background-color: transparent;
    border: 3px solid var(--light);
    border-radius: 5px;
    font-size: 1.7rem;
    padding: 3px 10px;
    font-weight: 500;
    color: var(--dark);
    transition: all 0.2s ease;
  }

  .input:active, .input:focus {
    outline: none;
    border: 3px solid var(--accent)
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
    resize: none !important;
  }

  .category {
    margin-bottom: 2em;
    width: 30%;
  }


</style>
