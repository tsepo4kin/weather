<template>
  <div class="grey lighten-2">
    <v-row>
      <v-col lg="9" class="mx-auto">
        <h2 class="text-center my-3">location input</h2>
        <v-text-field
          solo
          hide-details="true"
          clearable
          label="Volzhskiy"
          v-model="cityTitle"
          @input="autoComplete"
        ></v-text-field>
        <div
          v-for='cityName of autoCompleteData'
          :key='cityName.id'
        >{{cityName.name}}</div>
        <v-btn class="my-3 d-block mx-auto green accent-2" width="300" @click="addNewLocation">add</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import citiesList from '@/city-list.json'
export default {
  data: () => ({
    cityTitle: null,
    autoCompleteData: null
  }),
  created() {
    this.citiesListData = citiesList
  },
  methods: {
    autoComplete(inputValue) {
      let count = 0;
      this.autoCompleteData = this.citiesListData.filter(e => {
        if(e.name.toLowerCase().indexOf(inputValue.toLowerCase()) == 0 && count < 4 ) {
          count++;
          return true;
        } else {
          return false;
        }
      })
      console.log(this.autoCompleteData)
    },
    addNewLocation() {
      this.$emit("addNewLocation", this.cityTitle);
      this.cityTitle = null;
    },
  },
};
</script>

<style></style>
