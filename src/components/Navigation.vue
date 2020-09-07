<template>
  <transition name="slide">
    <div class="navigation bg-dark" v-bind:class="{ adaptiveNav: isOpen }">
      <div id="nav" class=" container" v-bind:class="{ adaptiveMenu: isOpen }">

        <router-link
          to="/" id="nav-logo"
        ><img src="../assets/images/logo.png" alt="logo"></router-link>

        <transition name="slide-fade">
          <div id="nav-links" v-if="showLinks">
            <a href="https://github.com/tttapa/Control-Surface" target="_blank">
              <i class="fab fa-github-alt"></i>
              <span>Get Library</span>
            </a>
            <router-link to="/categories">Sketch Examples</router-link>
            <router-link to="/tutorials">Video Tutorials</router-link>
            <router-link to="/contact">Contact</router-link>
          </div>
        </transition>


      </div>
      <div
        id="burger"
        :class="{ 'active' : isOpen }"
        @click.prevent="toggle"
      >
        <slot>
          <button type="button" class="burger-button" title="Menu">
            <span class="hidden">Toggle menu</span>
            <span class="burger-bar burger-bar--1"></span>
            <span class="burger-bar burger-bar--2"></span>
            <span class="burger-bar burger-bar--3"></span>
          </button>
        </slot>
      </div>
    </div>
  </transition>


</template>

<script>
  export default {
    name: 'Navigation',
    data() {
      return {
        isOpen: false,
        showLinks: true
      }
    },
    methods: {
      toggle() {
        this.showLinks = !this.showLinks;
        this.isOpen = !this.isOpen
      }
    },
    mounted() {
      this.isOpen = false;
      if (window.innerWidth <= 600) {
        this.showLinks = false;
      }

    }
  }
</script>

<style scoped>

  .navigation {
    -webkit-box-shadow: 0 2px 10px -1px rgba(145, 157, 217, 0.57);
    box-shadow: 0 2px 10px -1px rgba(145, 157, 217, 0.57);
  }

  #nav {
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    grid-gap: 2em;
    padding: 1.5em;
    height: var(--height);
    align-items: center;
  }

  #nav-logo {
    width: 70%;

  }

  #nav-logo img {
    width: 100%;
  }

  #nav-links {
    max-width: 100%;
    justify-self: end;
  }

  #nav-links a {
    margin-left: 50px;
    transition: var(--transition);
  }

  #nav-links a:hover {
    color: var(--accent);
  }

  .fa-github-alt {
    margin-right: 10px;
  }

  .hidden {
    visibility: hidden;
  }


  /*BUTTON*/
  button {
    cursor: pointer;
    outline: none;
  }

  .burger-button {
    position: relative;
    height: 30px;
    width: 50px;
    display: block;
    z-index: 60;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform .6s cubic-bezier(.165, .84, .44, 1);
  }

  .burger-bar {
    background-color: var(--light);
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 4px;
    width: auto;
    transition: transform .6s cubic-bezier(.165, .84, .44, 1), opacity .3s cubic-bezier(.165, .84, .44, 1), background-color .6s cubic-bezier(.165, .84, .44, 1);
  }

  .burger-bar--1 {
    -webkit-transform: translateY(-6px);
    transform: translateY(-10px);
  }

  .burger-bar--2 {
    transform-origin: 100% 50%;
    transform: scaleX(.8);
  }

  .burger-button:hover .burger-bar--2 {
    transform: scaleX(1);
  }

  .no-touchevents .burger-bar--2:hover {
    transform: scaleX(1);
  }

  .burger-bar--3 {
    transform: translateY(10px);
  }

  #burger {
    z-index: 999;
    display: none;
    margin-bottom: 10px;
    margin-left: 8%;
    position: fixed;
    top: 5%;
    right: 3%;
  }

  #burger.active .burger-button {
    transform: rotate(-180deg);
  }

  #burger.active .burger-bar--1 {
    transform: rotate(45deg)
  }

  #burger.active .burger-bar--2 {
    opacity: 0;
  }

  #burger.active .burger-bar--3 {
    transform: rotate(-45deg)
  }

  .adaptiveNav {
    height: 100vh !important;
  }

  .adaptiveMenu {
    flex-direction: column;
    height: 100% !important;
    justify-content: flex-start !important;
  }


  .slide-fade-enter-active {
    transition: all 1.5s ease;
  }

  .slide-fade-leave-active {
    transition: all 1.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
  {
    transform: translateY(2em);
    opacity: 0;
  }


  /*MEDIA QUERIES*/
  @media screen and (max-width: 1200px) {
    #nav {
      grid-template-columns: 0.4fr 1fr;
    }

    #nav-logo {
      width: 100%;
    }

    #nav-links a {
      margin-left: 20px;
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 900px) {

    #nav {
      grid-template-columns: 1fr;
      height: 13em;
      grid-gap: 10px;
    }

    #nav-logo {
      width: 80%;
      justify-self: center;
    }

    #nav-links {
      justify-self: center;
    }

  }

  @media screen and (max-width: 600px) {

    .navigation {
      z-index: 999;
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      overflow: hidden;
      height: 8em;
      transition: all 0.6s ease;
    }

    #burger {
      display: block;

    }

    #nav {
      display: block;
      height: 8em;
    }


    #nav-links {
      padding-top: 10em;
      align-self: center;
      display: flex;
      flex-direction: column;
      position: relative;
      top: 0;
      left: 0;
    }

    #nav-logo {
      align-self: center;
      z-index: 999;
    }

    #nav-logo img {
      width: 90%;
      padding-bottom: 3px;
    }

    #nav a {
      font-size: 3.5rem;
      text-align: center;
    }

  }

  @media screen and (max-width: 480px) {

    #nav a {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 393px) {
    #nav a {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 320px) {

    .burger-button {
      width: 40px;
    }

    #burger {
      top: 5.5%;
    }

    .navigation {
      height: 6em;
    }

    #nav a {
      font-size: 1.9rem;
      margin-left: 0;
    }

    #nav-links {
      padding-top: 3em;
    }

    #nav-links a {
      margin-top: 1em;
    }




  }
</style>
