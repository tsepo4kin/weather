<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col lg="9" class="mx-auto">
            <input-location />

            <hr />

            <div class="d-flex flex-wrap">
              <weather-card
                v-for="location in locations"
                :key="location.title"
                class="mt-5 mx-auto"
                :locationData="location"
              />
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <!-- graph -->
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import InputLocation from "./components/InputLocation.vue";
import WeatherCard from "./components/WeatherCard.vue";

export default {
  name: "App",
  components: {
    InputLocation,
    WeatherCard,
  },

  data: () => ({
    locations: [
      { title: "Moscow" },
      { title: "Volzhski" },
      { title: "Volgograd" },
      { title: "Los-Angeles" },
    ],
  }),
};
</script>
