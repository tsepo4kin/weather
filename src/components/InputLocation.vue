<template>
  <div>
    <h2>location input</h2>
    <v-text-field v-model="cityTitle"></v-text-field>
    <v-btn @click="addNewLocation">add</v-btn>
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
