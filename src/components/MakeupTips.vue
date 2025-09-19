<!--<template>-->
<!--  <v-row>-->
<!--    <v-col align-self="start">-->
<!--      <TipDescription align="left" :title="traits.eye_color" description="eye_colors"/><br/>-->
<!--      <TipDescription :title="traits.hair_color" description="hair_colors"/>-->
<!--    </v-col>-->
<!--    <v-col>-->
<!--      <TipDescription :title="traits.face_shape" description="face_shapes"/><br/>-->
<!--      <TipDescription :title="traits.skin_tone" description="skin_tones"/>-->
<!--    </v-col>-->
<!--  </v-row>-->
<!--  -->
<!--</template>-->

<template>
  <v-row>
    <v-col class="d-flex align-stretch">
      <TipDescription
        class="flex-grow-1"
        align="left"
        :title="traits.eye_color"
        description="eye_colors"
      />
    </v-col>
    <v-col class="d-flex align-stretch">
      <TipDescription
        class="flex-grow-1"
        :title="traits.face_shape"
        description="face_shapes"
      />
    </v-col>
  </v-row>

  <v-row>
    <v-col class="d-flex align-stretch">
      <TipDescription
        class="flex-grow-1"
        :title="traits.hair_color"
        description="hair_colors" />
    </v-col>
    <v-col class="d-flex align-stretch">
      <TipDescription
        class="flex-grow-1"
        :title="traits.skin_tone"
        description="skin_tones" />
    </v-col>
  </v-row>
</template>


<script>
import TipDescription from "@/components/TipDescription.vue";

export default {
  name: "MakeupTips",
  components: {TipDescription},
  props: {
    traits: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>

</style>
