<template>
  <div>
    <div v-if="loader"></div>
    <v-card v-else width="350" class="mx-4">
      <v-card-title class="deep-purple accent-4" style="color: white">
        {{ locationData.title }}
      </v-card-title>
      <v-card-text class="py-2">
        <v-icon class="float-right" style="font-size: 140px">
          {{ calcIcon }}
        </v-icon>
        
        <span class="text-h4 d-block ml-4">{{ calcTemp }}&#176; </span>

        <span class="title d-block">
          Feels like: {{ calcFeelsLike }}&#176;
        </span>

        <span class="title d-block">
          <v-icon> mdi-water-percent </v-icon>:
          {{ this.weatherData.main.humidity }}%
        </span>

        <span class="title d-block">
          <v-icon> mdi-weather-windy </v-icon>: {{ this.weatherData.wind.speed }} m/s
        </span>

        <span class="title d-block" v-if="this.weatherData.rain">
          <v-icon> mdi-water </v-icon>: Rain volume for last {{ calcRainTime }}:
          {{ calcRainVolume }} mm
        </span>

        <span class="title d-block" v-if="this.weatherData.snow">
          <v-icon> mdi-snowflake </v-icon>: Snow volume for last
          {{ calcSnowTime }}: {{ calcSnowVolume }} mm
        </span>
      </v-card-text>
      <v-card-actions>
        <v-btn class="mx-auto" dark @click="deleteLocation">
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
    if (this.weatherData == "error") {
      alert("Ошибка запроса");
      this.$emit("wrongLocation", this.locationData.title);
    } else {
      this.loader = false;
    }
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
    calcIcon() {
      if (this.weatherData.rain) {
        return "mdi-weather-pouring";
      } else if (this.weatherData.snow) {
        return "mdi-weather-snowy";
      } else if (this.weatherData.clouds.all === 0) {
        return "mdi-white-balance-sunny";
      } else if (this.weatherData.clouds.all <= 70) {
        return "mdi-weather-partly-cloudy";
      } else if (this.weatherData.clouds.all > 70) {
        return "mdi-cloud";
      } else {
        return null;
      }
    },

    calcRainTime() {
      return Object.keys(this.weatherData.rain)[0];
    },
    calcRainVolume() {
      return Object.values(this.weatherData.rain)[0];
    },
    calcSnowTime() {
      return Object.keys(this.weatherData.snow)[0];
    },
    calcSnowVolume() {
      return Object.values(this.weatherData.snow)[0];
    },
  },
};
</script>

<style></style>
