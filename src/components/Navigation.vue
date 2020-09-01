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

  .router-link-active {
    color: var(--accent);
  }

  .fa-github-alt {
    margin-right: 10px;
  }
</style>
