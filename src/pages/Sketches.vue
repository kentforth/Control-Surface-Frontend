<template>
  <div class="sketches bg-dark">
    <Navigation/>
    <div class="content container">
      <div class="sketches-all">
        <router-link to="/" class="sketch-item" v-for="sketch in sketches" :key="sketch">
          <h1>{{sketch.title}}</h1>
          <img src="../assets/images/icons/arduino file.png" alt="arduino file">
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
            title: 'Some',
            sketchUrl: '/categories/:sketches/:id'
          }
        ],
        exampleName: this.$route.params.sketches
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
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  .sketches-all {
    display: grid;
    grid-gap: 2em;
    max-width: 100%;
    margin-top: 4em;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .sketch-item {
    display: grid;
    justify-content: center;
    grid-template-rows: 0.3fr 1fr;
    align-items: center;
  }

  .sketch-item h1{
    text-align: center;
  }

  .sketch-item img{
    width: 100%;
  }


</style>
