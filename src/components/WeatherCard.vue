<template>
  <div>
    <div v-if="loader"></div>
    <v-card v-else width="350" class="mx-4">
      <v-card-title :class='calcColor'>
        {{ locationData.title }}
      </v-card-title>
      <v-card-text>
        temp: {{ calcTemp }} <br />
        feels like: {{ calcFeelsLike }} <br />
        humidity: {{ this.weatherData.main.humidity }} % <br />
        pressure: {{ calcPressure }} <br />
        clouds: {{ this.weatherData.clouds.all }} % <br />
        wind: {{ this.weatherData.wind }} <br />
        <span v-if='this.weatherData.rain'>
          rain: {{ this.weatherData.rain}}
        </span>
        <span v-if='this.weatherData.snow'>
          rain: {{ this.weatherData.snow}}
        </span>
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
    calcColor() {
      if(this.weatherData.rain) {
        return 'grey lighten-1'
      }
      if(this.weatherData.snow) {
        return 'white'
      }
      else {
        return 'light-blue lighten-3'
      }
    }
  },
};
</script>

<style></style>
