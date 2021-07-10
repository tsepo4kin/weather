<template>
  <v-app>

    <v-main>
      <v-container>
        <input-location />  

        <hr>

        <weather-card class="mt-5" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import InputLocation from './components/InputLocation.vue'
import WeatherCard from './components/WeatherCard.vue'

export default {
  name: "App",
  components: {
    InputLocation,
    WeatherCard
  },

  data: () => ({
    //
  })
};
</script>
