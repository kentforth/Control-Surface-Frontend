<template>
  <div class="main">
    <Navigation/>
    <q-carousel
      animated
      :autoplay="2500"
      v-model="slide"
      infinite
      class="slider"

    >
      <q-carousel-slide :name="1" img-src="../assets/images/slider/Controller 1.jpg"/>
      <q-carousel-slide :name="2" img-src="../assets/images/slider/Controller 2.jpg"/>
      <q-carousel-slide :name="3" img-src="../assets/images/slider/Controller 3.jpg"/>
      <q-carousel-slide :name="4" img-src="../assets/images/slider/Controller 4.jpg"/>
      <q-carousel-slide :name="5" img-src="../assets/images/slider/Controller 5.jpg"/>
      <q-carousel-slide :name="6" img-src="../assets/images/slider/Controller 6.jpg"/>
      <q-carousel-slide :name="7" img-src="../assets/images/slider/Controller 7.jpg"/>
      <q-carousel-slide :name="8" img-src="../assets/images/slider/Controller 8.jpg"/>

    </q-carousel>

    <div class="info">
      <div class="info-img">
        <h3>Download example sketches for your DIY Midi Controller</h3>
        <img src="../assets/images/icons/arrow.png" alt="">
      </div>
      <h3>Create your own DIY Midi Controller
          with library <a
          href="https://github.com/tttapa/Control-Surface" class="secondary" target="_blank"
        >Control Surface</a> <br> <br>on Arduino
          boards</h3>

    </div>

  </div>
</template>

<script>
  import Navigation from "components/Navigation";

  export default {
    name: 'Main',
    components: {Navigation},
    data() {
      return {
        slide: 1,
      }
    },
    meta: {
      title: 'Home'
    }
  }
</script>
<style scoped>

  .slider {
    height: calc(100vh - var(--height));

  }

  .info {
    position: absolute;
    border-radius: 30px;
    top: 28%;
    left: 7%;
    padding: 4em;
    z-index: 1;
    background: rgba(43, 47, 64, 0.7);
  }

  .info-img {
    display: flex;
  }

  .info-img img {
    width: 10%;
    height: 10%;
    margin-left: 50px;
  }

  h3 > a {
    font-size: 3rem;
  }

  @media screen and (max-width: 900px) {
    .slider {
      margin-top: 10em;
    }
  }

  @media screen and (max-width: 768px) {

    .info {
      padding: 2em;
      width: 80%;
      left: 10%;
    }

    .info-img {
      align-items: center;
    }

    h3, h3 > a {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    .slider {
      margin-top: 0;
      height: calc(111.5vh - var(--height));
    }

    .info {
      top: 23%;
    }

    h3, h3 > a {
      font-size: 2rem;
    }

    .info-img img {
      width: 15%;
    }
  }

  @media screen and (max-width: 480px) {

    .slider {
      height: calc(122vh - var(--height));
    }

    .info {
      top: 20%;
      margin-bottom: 2em;
    }

    .info-img img {
      margin-left: 30px;
    }

  }

  @media screen and (max-width: 393px) {

    .slider {
      height: calc(130vh - var(--height));
    }

    .info-img {
      display: grid;
      grid-template-rows: 1fr 0.5fr;
      justify-content: center;
      align-items: center;
    }

    .info-img h3 {
      margin: 0;
    }

    .info-img img {
      margin-left: 0;
      width: 70px;
      height: 70px;
      align-self: center;
      position: relative;
      left: 36%;
    }

    br {
      display: none;
    }
  }

  @media screen and (max-width: 320px) {

    .slider {
      height: calc(170vh - var(--height));
    }

    h3, h3 > a {
      font-size: 1.5rem;
    }

    .info-img {
      grid-template-rows: 1fr 0.2fr;
    }

    .info-img img {
      width: 50px;
      height: 50px;
      align-self: start;
    }



  }
</style>
