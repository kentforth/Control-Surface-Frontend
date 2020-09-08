<template>
    <q-layout>
      <q-page-container>
        <Navigation/>
        <router-view>
        </router-view>
      </q-page-container>
    </q-layout>
</template>

<script>
    import Navigation from "components/Navigation";
    export default {
        name: "Admin",
      components: {Navigation}
    }
</script>

<style scoped>

</style>
