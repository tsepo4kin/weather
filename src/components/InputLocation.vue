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
        ></v-text-field>
        <v-btn class="my-3 d-block mx-auto green accent-2" width="300" @click="addNewLocation">add</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    cityTitle: null,
  }),
  methods: {
    autoComplete() {},
    addNewLocation() {
      this.$emit("addNewLocation", this.cityTitle);
      this.cityTitle = null;
    },
  },
};
</script>

<style></style>
