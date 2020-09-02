<template>
  <div class="navigation bg-dark">
    <div id="nav" class=" container">

      <router-link
        to="/" id="nav-logo"
      ><img src="../assets/images/logo.png" alt="logo"></router-link>

      <div id="nav-links">
        <a href="https://github.com/tttapa/Control-Surface" target="_blank">
          <i class="fab fa-github-alt"></i>
          <span>Get Library</span>
        </a>
        <router-link to="/examples">Sketch Examples</router-link>
        <router-link to="/tutorials">Video Tutorials</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'Navigation',
    data() {
      return {}
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
    #nav-links {
      display: grid;grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
    }
  }
</style>
