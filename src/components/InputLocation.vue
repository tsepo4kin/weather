<template>
  <div>
    <h2 class="text-center">location input</h2>
    <v-text-field
      solo
      hide-details="true"
      clearable
      label="Volzhskiy"
      v-model="cityTitle"
    ></v-text-field>
    <v-btn class="my-3" block @click="addNewLocation">add</v-btn>
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
