<template>
  <v-card width="250" class="mx-4">
    <v-card-title>
      {{locationData.title}}
    </v-card-title>
    <hr>
    <v-card-text>
      icon, temp, info
    </v-card-text>
    <v-card-actions>
      <v-btn>
        delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    locationData: {
      require: true
    }
  }
}
</script>

<style>

</style>