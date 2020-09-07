<template>
  <div class="sketches bg-dark">
    <Navigation/>
    <div class="content container">
      <div class="sketches-all">
        <router-link :to="sketch.sketchUrl" class="sketch-item" v-for="(sketch, index) in
        sketches" :key="index">
          <h1>{{sketch.title}}</h1>
          <img src="../assets/images/icons/arduino file.png" alt="arduino file" class="file-img">
        </router-link>

      </div>

    </div>
  </div>
</template>

<script>
  import Navigation from "components/Navigation";

  export default {
    name: 'Sketches',
    components: {Navigation},
    meta: {
      title: 'Sketches'
    },
    data() {
      return {
        sketches: [
          {
            title: 'One Two',
            sketchUrl: this.$route.params.sketches + '/' + '1'
          },
          {
            title: 'Three',
            sketchUrl: this.$route.params.sketches + '/' + '2'
          },
          {
            title: 'Three',
            sketchUrl: this.$route.params.sketches + '/' + '3'
          },
          {
            title: 'Three',
            sketchUrl: this.$route.params.sketches + '/' + '4'
          },
          {
            title: 'Three',
            sketchUrl: this.$route.params.sketches + '/' + '5'
          },
          {
            title: 'Three',
            sketchUrl: this.$route.params.sketches + '/' + '6'
          },
          {
            title: 'Three',
            sketchUrl: this.$route.params.sketches + '/' + '7'
          },
          {
            title: 'Three',
            sketchUrl: this.$route.params.sketches + '/' + '8'
          },
          {
            title: 'Three',
            sketchUrl: this.$route.params.sketches + '/' + '9'
          },

        ]

      }
    },


  }
</script>
<style scoped>

  .container {
    max-width: 88%;
    margin: 0 auto;
  }

  .sketches {
    width: 100%;
    height: calc(120vh);
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  .sketches-all {
    display: grid;
    grid-gap: 4em;
    max-width: 100%;
    margin-top: 4em;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    margin-bottom: 2em;
  }

  .sketch-item {
    display: grid;
    justify-content: center;
    grid-template-rows: 0.3fr 1fr;
    align-items: center;
  }

  .file-img {
    transition: all 0.2s ease-in-out;
  }

  .sketch-item:hover > .file-img {
    -webkit-filter: drop-shadow(0 0 15px #F2AC29);
  }

  .sketch-item h1{
    text-align: center;
  }

  .sketch-item img{
    width: 100%;
  }

/*MEDIA QUERIES*/
  @media screen and (max-width: 1200px) {
    .sketches {
      width: 100%;
      height: calc(180vh);
    }
  }

  @media screen and (max-width: 900px) {
    .sketches {
      width: 100%;
      height: calc(190vh);
    }
  }

  @media screen and (max-width: 768px) {
    .sketches {
      width: 100%;
      height: 100%;
      padding-bottom: 2em;
    }
  }

  @media screen and (max-width: 600px) {
    .sketches {
      padding-top: 4em;
    }
  }

  @media screen and (max-width: 600px) {
    .sketches-all {
      grid-gap: 2em;
    }
  }

  @media screen and (max-width: 393px) {

    .sketches-all {
      justify-items: center;
    }

    .sketch-item {
      width: 80%;
    }
  }
</style>
