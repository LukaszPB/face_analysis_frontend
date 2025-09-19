<template>
  <v-card>
    <v-row>
      <v-col cols="8">
        <v-card-title>
          {{$t(`${description.slice(0,description.length-1)}`)}}: {{$t(`${description}.${title}`)}}
        </v-card-title>
        <v-card-text>
          {{$t(`${description}_description.${title}`)}}
        </v-card-text>
      </v-col>
      <v-col cols="4" class="d-flex align-center">
        <v-img
          :src="getImagePath()"
          height="300"
          contain
          class="mt-4"
        ></v-img>
      </v-col>
    </v-row>
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
  methods: {
    getImagePath() {
        return `src/assets/images/${this.description}/${this.title}.png`;
    }
  }
}
</script>

<style scoped>
.v-card {
  width: 100%;
  /*min-height: 450px;*/
  /*max-height: 450px;*/
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
