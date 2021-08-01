<template>
  <div>
    <div v-if="loader"></div>
    <v-card v-else width="250" class="mx-4">
      <v-card-title>
        {{ locationData.title }}
      </v-card-title>
      <v-card-text>
        temp: {{ calcTemp }} <br />
        feels like: {{ calcFeelsLike }} <br />
        humidity: {{ this.weatherData.main.humidity }} % <br />
        pressure: {{ calcPressure }} <br />
        clouds: {{ this.weatherData.clouds.all }} <br />
        wind: {{ this.weatherData.wind }}
      </v-card-text>
      <v-card-actions>
        <v-btn class="mx-auto red" @click="deleteLocation">
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
      require: true,
    },
  },
  async created() {
    this.weatherData = await getWeatherByCity(this.locationData.title);
    this.loader = false;
    console.log(this.weatherData);
  },
  data: () => ({
    weatherData: null,
    loader: true,
  }),
  methods: {
    deleteLocation() {
      this.$emit("deleteLocation", this.locationData.title);
    },
  },
  computed: {
    calcTemp() {
      return Math.round(this.weatherData.main.temp - 273.15);
    },
    calcFeelsLike() {
      return Math.round(this.weatherData.main.feels_like - 273.15);
    },
    calcPressure() {
      return Math.round(this.weatherData.main.pressure / 1.333);
    },
  },
};
</script>

<style></style>
