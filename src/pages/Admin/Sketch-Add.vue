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
                class="input"
                id="title"
                ref="title"
                type="text"
                v-model.trim="form.title"
                :class="$v.form.title.$error ? 'is-invalid' : ''"
              >
              <span
                class="invalid-feedback"
                :class="$v.form.title.$error ? 'showError' : ''"
              >
                Title is required
              </span>
              <label for="titleUrl">URL</label>
              <input
                v-model.trim="form.tutorialUrl" class="input"
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
                @change="selectFile($event)"
                multiple
                accept="image/jpg,image/jpeg,/image/png"

              />
              <p>{{form.file.name}}</p>
              <q-spinner-pie color="amber-11" size="3em" v-bind:class="[isImagesUploading ?
              'showSpinner' : 'hideSpinner']"/>
            </div>

            <!--SKETCH TEXT-->
            <div class="textarea">
              <label for="textarea">Sketch</label>
              <textarea
                v-model="form.sketchText"
                rows="8"
                class="input text"
                id="textarea"
                ref="text"
                :class="$v.form.sketchText.$error ? 'is-invalid' : ''"
              />
              <span
                class="invalid-feedback"
                :class="$v.form.sketchText.$error ? 'showError' : ''"
              >
                Text is required
              </span>
            </div>
          </div>

          <!--DROPDOWN MENU-->
          <CustomSelect
            :options="['Potentiometers', 'Buttons', 'Encoders', 'Switches', 'Leds',
          'Banks', 'Displays', 'Multiplexers']" class="category"
          />
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
  import { required } from 'vuelidate/lib/validators';
  import axios from 'axios';

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
        cloudinaryUrl: 'https://api.cloudinary.com/v1_1/kentforth/upload',
        cloudinaryPreset: 'control-surface',
        counter: 0,
        isImagesUploading:false,
        form: {
          title: '',
          tutorialUrl: '',
          file: '',
          sketchText: '',
          category: 'Category',
          options: [
            'Potentiometers', 'Buttons', 'Encoders', 'Switches', 'Leds', 'Banks', 'Displays',
            'Multiplexers'
          ]
        }

      }
    },
    validations: {
      form:{
        title: {required},
        sketchText: {required}
      }


    },
    methods: {
      addSketch() {
        this.$v.form.$touch();
        //check for validation
        if (this.$v.form.$error) {
          return;
        }

          console.log('Sketch saved')

      },
      selectFile(e) {
        //get image from file chooser
        this.form.file = e.target.files[0];
        this.uploadImage(e);
      },
      uploadImage(evt) {
        Object.values(evt.target.files).forEach(file => {

            const public_id = this.form.title + ' ' + ++this.counter;
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', this.cloudinaryPreset);
            formData.append('public_id', public_id);
          this.isImagesUploading = true;
            axios({
                    url: this.cloudinaryUrl,
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: formData
                  }).then(response => {
              this.counter = 0;
              this.isImagesUploading = false;
            }).catch(error => {
              console.log(error)
            });



        });
      }
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

  .form span {
    position: relative;
  }

  .input {
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
    margin-top: 0.5em;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
  }

  .title-file img {
    width: 100%;
    justify-self: center;
    margin-left: 15px;
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
    margin: 2em 0;
    width: 30%;
  }

  .is-invalid{
    border:3px solid var(--q-color-negative);

  }

  .invalid-feedback {
    color: var(--q-color-negative);
    font-size: 1rem;
    margin-top: 3px;
    visibility: hidden;
  }

  .showError {
    visibility: visible;
  }

  .showSpinner {
    visibility: visible;
  }

  .hideSpinner {
    visibility: hidden;
  }

</style>
