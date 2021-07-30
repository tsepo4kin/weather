<template>
  <v-card width="250" class="mx-4">
    <v-card-title>
      {{locationData.title}}
    </v-card-title>
    <hr>
    <v-card-text>
      temp: {{ Math.round(weatherData.main.temp -  273.15)}}
    </v-card-text>
    <v-card-actions>
      <v-btn @click="deleteLocation">
        delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { getWeatherByCity } from "../api";
export default {
  props: {
    locationData: {
      require: true
    }
  },
  async created() {
    this.weatherData = await getWeatherByCity(this.locationData.title);
    console.log(this.weatherData)
  },
  data: () => ({
    weatherData: null,
  }),
  methods: {
    deleteLocation() {
      this.$emit('deleteLocation', this.locationData.title)
    },

  }
}
</script>

<style>

</style>