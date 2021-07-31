<template>
  <div>
    <div v-if="loader"></div>
    <v-card v-else width="250" class="mx-4">
      <v-card-title>
        {{locationData.title}}
      </v-card-title>
      <hr>
      <v-card-text>
        temp: {{ calcTemp }}
        feels like: {{ calcFeelsLike }}
        humidity: {{ this.weatherData.main.humidity }}
        pressure: {{ this.weatherData.main.pressure }}
      </v-card-text>
      <v-card-actions>
        <v-btn @click="deleteLocation">
          delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
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
    this.loader = false
    console.log(this.weatherData)
  },
  data: () => ({
    weatherData: null,
    loader: true
  }),
  methods: {
    deleteLocation() {
      this.$emit('deleteLocation', this.locationData.title)
    },

  },
  computed: {
    calcTemp() {
      return Math.round(this.weatherData.main.temp -  273.15)
    },
    calcFeelsLike() {
      return Math.round(this.weatherData.main.feels_like -  273.15)
    }
  }
}
</script>

<style>

</style>