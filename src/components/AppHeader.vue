<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Weather</v-toolbar-title>

      <v-spacer></v-spacer>

      <input-location @addNewLocation="addNewLocation"></input-location>

    </v-app-bar>
  </div>
</template>

<script>
import InputLocation from './InputLocation.vue'
export default {
  components: {
    InputLocation
  },
  methods: {
    addNewLocation(e) {
      this.$emit("addNewLocation", e);
    },
  }
}
</script>

<style>

</style>