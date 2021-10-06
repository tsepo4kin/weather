<template>
  <v-app>
   <app-header @addNewLocation="addNewLocation"></app-header>

    <v-main>

      <v-container>

        <v-row>
          <v-col lg="9" class="mx-auto">
            <div class="d-flex flex-wrap">
              <weather-card
                v-for="location in locations"
                :key="location.title"
                class="mt-5 mx-auto"
                :locationData="location"
                @deleteLocation="deleteLocation"
                @wrongLocation="deleteLocation"
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
import AppHeader from './components/AppHeader.vue';
import WeatherCard from "./components/WeatherCard.vue";

export default {
  name: "App",
  components: {
    WeatherCard,
    AppHeader,
  },

  created() {
    this.locations = JSON.parse(localStorage.getItem("weatherLocations")) || [];
  },

  data: () => ({
    locations: [{ title: "Moscow" }],
  }),
  methods: {
    addNewLocation(title) {
      this.locations.push({ title: title });
      localStorage.setItem("weatherLocations", JSON.stringify(this.locations));
    },
    deleteLocation(title) {
      this.locations = this.locations.filter((e) => e.title != title);
      localStorage.setItem("weatherLocations", JSON.stringify(this.locations));
    },
  },
};
</script>
