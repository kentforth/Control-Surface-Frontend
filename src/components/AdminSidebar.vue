<template>
    <div class="sidebar">
      <div class="links">
        <router-link to="/admin/video">
          <i class="fas fa-video"></i>
          <span>Video</span>
        </router-link>

        <router-link to="/admin/sketches">
          <i class="far fa-file-alt"></i>
          <span>Sketches</span>
        </router-link>

        <button class="btn-logout">
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>

    </div>
</template>

<script>
    export default {
        name: "AdminSidebar"
    }
</script>

<style scoped>
.sidebar {
  width: 20%;
  height: calc(100vh - var(--height));
  background-color: var(--admin-sidebar);
}

  .links {
    display: grid;
    grid-template-rows: 50px 50px 1fr;
    width: 100%;
    justify-content: center;
    padding-top: 3em;
    grid-row-gap: 3em;
    height: 100%;
    padding-bottom: 1em;
  }

.links a {
  font-size: 2.5rem;
  color: rgba(221, 226, 244, 0.5);
  font-weight: 600;
  transition: var(--transition);
}

.links a:hover {
  color: var(--secondary);
}

  .fa-video, .fa-file-alt {
    margin-right: 20px;
  }

  .btn-logout {
    height: 50px;
    align-self: end;
    width: 60px;
    margin-bottom: 4em;
    cursor: pointer;
    padding: 0;
    background-color: transparent;
    border:none;
  }


.btn-logout:active, .btn-logout:focus {
  outline: none;

}

.btn-logout:active {
  transform: translateY(3px);
}

  .fa-sign-out-alt {
    font-size: 3rem;
    color: rgba(221, 226, 244, 0.5);
  }

.fa-sign-out-alt {
  transition: var(--transition);

}

.fa-sign-out-alt:hover {
  color: var(--secondary);
}

  .router-link-exact-active {
    color: var(--accent) !important;
  }

</style>
