<template>
  <div>
    <div v-if="loader"></div>
    <v-card v-else width="350" class="mx-4">
      <v-card-title :class='calcColor'>
        {{ locationData.title }}
      </v-card-title>
      <v-card-text>
        <span
          class="title"
        >
        Temp:  {{ calcTemp }}&#176;
        </span>

        <v-icon class="float-right" style="font-size: 150px">
          {{calcIcon}}
        </v-icon>

        <span
          class="title d-block"
        >
          Feels like: {{ calcFeelsLike }}&#176;
        </span>

        <span
          class="title d-block"
        >
          <v-icon>
            mdi-water-percent
          </v-icon>:
          {{ this.weatherData.main.humidity }}%
        </span>

        <span
          class="title d-block"
        >
          <v-icon>
            mdi-weight
          </v-icon>:
          {{ calcPressure }}-mm
        </span>

        <span
          class="title d-block"
        >
          <v-icon>
            mdi-weather-windy
          </v-icon>:
          {{ this.weatherData.wind }}
        </span>

        <span 
          class="title d-block"
          v-if='this.weatherData.rain'
        >
          <v-icon>
            mdi-water
          </v-icon>:
          {{this.weatherData.rain}}
        </span>

         <span 
          class="title d-block"
          v-if='this.weatherData.snow'
        >
          <v-icon>
            mdi-snowflake
          </v-icon>:
          {{this.weatherData.snow}}
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
    },
    calcIcon() {
      if(this.weatherData.rain) {
        return 'mdi-weather-pouring'
      }
      else if(this.weatherData.snow) {
        return 'mdi-weather-snowy'
      }
      else if (this.weatherData.clouds.all === 0) {
        return 'mdi-white-balance-sunny'
      }
      else if (this.weatherData.clouds.all <= 70) {
        return 'mdi-weather-partly-cloudy'
      }
      else if (this.weatherData.clouds.all > 70) {
        return 'mdi-cloud'
      }
      else {
        return null
      }
    }
  },
};
</script>

<style></style>
