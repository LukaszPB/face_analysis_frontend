<template>
  <v-card>
    <v-card-title>{{$t(`${description.slice(0,description.length-1)}`)}}: {{$t(`${description}.${title}`)}}</v-card-title>
    <v-card-text>
      {{$t(`${description}_description.${title}`)}}
    </v-card-text>
  </v-card>

</template>

<script>
export default {
  name: "TipDescription",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped>
.v-card {
  width: 100%;
  min-height: 300px;
  border-radius: 12px;
  padding: 16px;
  text-align: left;
  background: linear-gradient(135deg, #fde2e4, #c59ac2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: 3px solid white; /* Dodaje białą ramkę */
}
.v-card-title {
  color: #d63384;
}
</style>
