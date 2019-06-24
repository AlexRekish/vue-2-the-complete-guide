<template>
  <div class="container">
    <app-header/>
    <hr>
    <div class="row">
      <app-servers-list/>
      <app-server-details/>
    </div>
    <hr>
    <app-footer/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import ServersList from "./ServersList.vue";
import ServerDetails from "./ServerDetails.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    "app-header": Header,
    "app-servers-list": ServersList,
    "app-server-details": ServerDetails,
    "app-footer": Footer
  }
};
</script>

<style>
</style>
