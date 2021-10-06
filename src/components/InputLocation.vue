<template>
  <div>
    <v-text-field
      solo
      hide-details="true"
      dense
      clearable
      label="Volzhskiy"
      autocomplete="off"
      v-model="cityTitle"
      append-icon='mdi-check'
      @click:append='addNewLocation'
      @input="autoComplete"
      @keydown.enter="addNewLocation"
    ></v-text-field>
    <!-- <div class="d-flex justify-space-around mt-3">
      <div
        class="black rounded-pill pa-2 elevation-8"
        style="cursor: pointer"
        v-for="cityName of autoCompleteData"
        :key="cityName.id"
        @click="fillInput(cityName.name)"
      >
        {{ cityName.name }}
      </div>
    </div> -->
  </div>
</template>

<script>
import citiesList from "@/city-list.json";
export default {
  data: () => ({
    cityTitle: null,
    autoCompleteData: null,
  }),
  created() {
    this.citiesListData = citiesList;
  },
  methods: {
    autoComplete(inputValue) {
      this.autoCompleteData = this.citiesListData.filter((e) => {
        if (e.name.toLowerCase().indexOf(inputValue.toLowerCase()) == 0 ) return true;
      }).slice(0, 4);
    },

    addNewLocation() {
      this.$emit("addNewLocation", this.cityTitle);
      this.cityTitle = null;
    },

    fillInput(name) {
      this.cityTitle = name;
      this.addNewLocation();
    },
  },
};
</script>

<style></style>
