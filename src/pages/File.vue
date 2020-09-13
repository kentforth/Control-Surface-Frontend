<template>
  <div class="file bg-dark">
    <Navigation/>
    <div class="content ">
      <div class="container">

        <!--SKETCH TEXT AND VIDEO TUTORIAL-->
        <h1>File Page</h1>
        <div class="sketch-area">
            <textarea
              name="sketch" id="sketch-area" cols="10" rows="10"
              class="sketch__text"
            ></textarea>
          <iframe
            width="600" height="400" src="https://www.youtube.com/embed/tgbNymZ7vqY"
            class="sketch__video"
          >
          </iframe>
        </div>
        <div>

          <!--SHOW FULLSCREEN IMAGE-->
          <vue-easy-lightbox
            escEnabled
            moveEnabled
            :visible="visible"
            :imgs="images"
            :index="index"
            @hide="handleHide"
          ></vue-easy-lightbox>
        </div>
        <div class="image-preview">
          <button class="imageBtn" @click="showMultiple"></button>
        </div>

        <!--DOWNLOAD SKETCH-->
        <div class="download">

          <button class="btn-download btn-txt">
            <span>Download Sketch</span>
            <i class="fas fa-download"></i>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import VueEasyLightbox from 'vue-easy-lightbox'
  import Navigation from "components/Navigation";


  export default {
    name: "File",
    components: {Navigation, VueEasyLightbox},
    meta: {
      title: 'Sketch File'
    },
    data() {
      return {
        images: require("../assets/images/test.jpg"),
        visible: false,
        index: 0
      }
    },
    methods: {
      showMultiple() {
        this.images = [
          require("../assets/images/test.jpg"),
          require("../assets/images/test 2.jpg")
        ]

        this.index = 0
        this.show()
      },
      show() {
        this.visible = true
      },
      handleHide() {
        this.visible = false
      }
    }
  }
</script>

<style scoped>

  .file {
    height: 100%;
  }

  .content {
    width: 100%;
    height: 100%;
  }

  .container h1 {
    margin-top: 0;
    text-align: center;
  }

  .sketch-area {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2em;
    padding-bottom: 4em;
  }

  textarea {
    resize: none;
    background-color: var(--light-blue);
    color: var(--dark);
    font-size: 1.5rem;
    font-family: 'IBM Plex Sans', sans-serif;
    padding: 10px;
    border: 4px solid var(--light);
    border-radius: 10px;
    font-weight: 500;
  }

  textarea:focus {
    outline: none;
  }

  .sketch__video {
    justify-self: center;
  }

  .image-preview {
    text-align: center;
    padding-bottom: 2em;
  }

  .imageBtn {
    cursor: pointer;
    background: url('../assets/images/test.jpg') no-repeat;
    background-size: cover;
    width: 200px;
    height: 120px;
    margin: 0 auto;
    text-align: center;
    border: 2px solid var(--light-blue);
    border-radius: 4px;
    padding: 5px;

  }


  .imageBtn:active, .imageBtn:focus {
    outline: none;
  }

  .btn-download {
    font-size: 2rem;
    margin: 0;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    border: 1px solid #368dbe;
    border-top: 1px solid #c3d6df;
    text-shadow: 1px 1px 1px black;
    box-shadow: 0 1px 3px black;
    -moz-box-shadow: 0 1px 3px black;
    -webkit-box-shadow: 0 1px 3px black;
    cursor: pointer;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    padding: 10px 30px;
    color: var(--light);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .btn-txt {
    background-image: linear-gradient(to bottom, rgb(68, 160, 141) 50%, rgb(9, 54, 55));
    background-image: -webkit-gradient(linear, left top, left bottom,
    color-stop(0, rgb(68, 160, 141)), color-stop(0.51, rgb(9, 54, 55)));
    border: 1px solid #21CED1;

  }

  .btn-download:focus, .btn-download:active {
    outline: none;
  }

  .fa-download {
    color: var(--light);
    margin-left: 15px;
    text-shadow: 0 1px 0 black;
  }

  .download {
    display: block;
    width: 25%;
    padding: 2em 0 4em 0;
    margin: 0 auto;

  }

  .btn-download img {
    width: 50px;
    margin-left: 15px;
  }

  .btn-download:active {
    transform: translateY(3px);
  }


  /*MEDIA QUERIES*/

  @media screen and (max-width: 1200px) {
    .sketch-area {
      grid-template-columns: 1fr 1fr;
    }

    .sketch__video {
      width: 100%;
    }

    .download {
      width: 37%;
    }
  }

  @media screen and (max-width: 900px) {
    .download {
      width: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    .download {
      width: 60%;
    }
  }

  @media screen and (max-width: 600px) {
    .sketch-area {
      padding-top: 4em;
      grid-template-columns: 1fr;
      grid-row-gap: 2em;
    }

    .download {
      width: 75%;
    }
  }

  @media screen and (max-width: 480px) {
    .download {
      width: 90%;
    }
  }

  @media screen and (max-width: 393px) {
    .sketch__text {
      font-size: 1.5rem;
    }

    .btn-download {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 320px) {
    .sketch-area {
      padding-top: 1em;
      grid-template-rows: 0.6fr;
    }

    .download {
      margin: 0 auto;
      padding: 0 0 2em 0;
    }

    .btn-download {
      font-size: 1.3rem;
      padding: 10px 15px;
    }

  }
</style>
