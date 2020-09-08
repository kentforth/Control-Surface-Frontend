<template>
  <q-page class="page">
    <div class="home">
      <AdminSidebar/>

    </div>
  </q-page>
</template>

<script>
  import AdminSidebar from "components/AdminSidebar";

  export default {
    name: "Home",
    components: {AdminSidebar},
    meta: {
      title: 'Admin'
    }
  }
</script>

<style scoped>
  .home {
    display: flex;
    background-color: var(--primary);
  }
</style>
