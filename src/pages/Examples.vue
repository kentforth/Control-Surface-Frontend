<template>
  <div class="examples-all">
    <Navigation/>
    <div class="container">
      <div class="examples">

          <router-link to="/examples/sketches" class="examples__item" v-for="(image, imageIndex) in
          images"
                        :key="imageIndex">
            <div class="item-header">
              <h1>{{titles[imageIndex]}}</h1>
            </div>
            <div class="item-img">
              <img :src="image" alt="">
            </div>
          </router-link>

      </div>
    </div>

  </div>
</template>

<script>
  import Navigation from "components/Navigation";

  export default {
    name: 'Examples',
    components: {Navigation},
    meta: {
      title: 'Examples'
    },
    data() {
      return {
        titles: ['Potentiometers', 'Buttons', 'Encoders', 'Switches', 'Leds', 'Banks',
          'Displays', 'Multiplexers'],
        images: [
          require('../assets/images/examples/Potentiometer.jpg'),
          require('../assets/images/examples/Button.jpg'),
          require('../assets/images/examples/Encoder.jpg'),
          require('../assets/images/examples/Switch.jpg'),
          require('../assets/images/examples/Led.jpg'),
          require('../assets/images/examples/Bank.jpg'),
          require('../assets/images/examples/Display.jpg'),
          require('../assets/images/examples/Multiplexer.jpg'),
        ]
      }
    }
  }
</script>
<style scoped>

  .examples-all {
    background-color: var(--dark);
    padding-bottom: 8.1em;
  }

  .examples {
    display: grid;
    padding: 5em 1.5em 0 1.5em;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-column-gap: 4%;
    grid-row-gap: 8%;

  }

  .examples a {
    width: 100%;
  }

  .examples__item {
    display: grid;
    transition: var(--transition);
    grid-template-rows: 0.3fr 1fr;
  }

  .examples__item:hover {
    transform: scale(1.1, 1.1);
  }

  .examples__item h1 {
    background-color: var(--gray);
    margin: 0 auto;
    text-align: center;
    border-radius: 10px 10px 0 0;
  }

  .item-img {
    height: 250px;
  }

  .examples__item img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-radius: 0 0 10px 10px;

  }


</style>
