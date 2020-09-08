<template>
  <q-page class="page">
    <div class="home">
      <AdminSidebar/>
      <h1>Admin Home page</h1>
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
}

  .page {
    min-height: 100% !important;
  }
</style>
