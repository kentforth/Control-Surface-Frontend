<template>
  <div class="examples-all">
    <Navigation/>
    <div class="container">
      <div class="examples">

        <router-link
          :to="link.routeUrl" class="examples__item" v-for="(link, linkIndex) in
          links"
          :key="linkIndex"
        >
          <div class="item-header">
            <h1>{{link.title}}</h1>
          </div>
          <div class="item-img">
            <img v-bind:src="link.image" alt="">
          </div>
        </router-link>

      </div>
    </div>

  </div>
</template>

<script>
  import Navigation from "components/Navigation";

  export default {
    name: 'Categories',
    components: {Navigation},
    meta: {
      title: 'Categories'
    },
    data() {
      return {
        links: [
          {
            title: 'Potentiometers',
            image: require('../assets/images/examples/Potentiometer.jpg'),
            routeUrl: '/categories/potentiometers'
          },
          {
            title: 'Buttons',
            image: require('../assets/images/examples/Button.jpg'),
            routeUrl: '/categories/buttons'
          },
          {
            title: 'Encoders',
            image: require('../assets/images/examples/Encoder.jpg'),
            routeUrl: '/categories/encoders'
          },
          {
            title: 'Switches',
            image: require('../assets/images/examples/Switch.jpg'),
            routeUrl: '/categories/switches'
          },
          {
            title: 'Leds',
            image: require('../assets/images/examples/Led.jpg'),
            routeUrl: '/categories/leds'
          },
          {
            title: 'Banks',
            image: require('../assets/images/examples/Bank.jpg'),
            routeUrl: '/categories/banks'
          },
          {
            title: 'Displays',
            image: require('../assets/images/examples/Display.jpg'),
            routeUrl: '/categories/displays'
          },
          {
            title: 'Multiplexers',
            image: require('../assets/images/examples/Multiplexer.jpg'),
            routeUrl: '/categories/multiplexers'
          },
        ]
      }
    }
  }
</script>
<style scoped>

  .examples-all {
    background-color: var(--dark);
  }


  .examples {
    display: grid;
    padding: 5em 1.5em 4.1em 1.5em;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 4em;

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
    object-fit: cover;
    border-radius: 0 0 10px 10px;

  }

  /*MEDIA QUERIES*/
  @media screen and (max-width: 600px) {
    .examples {
      padding: 12em 0 4em 0;
      justify-items: center;
    }

    .examples__item {
      max-width: 60%;
    }
  }

  @media screen and (max-width: 393px) {
    .examples__item {
      max-width: 80%;
    }
  }

  @media screen and (max-width: 320px) {
    .item-header h1 {
      font-size: 1.8rem;
    }

    .examples__item {
      max-width: 90%;
    }

    .examples {
      padding-top: 10em;
    }
  }
</style>
