<template>
  <v-row>
    <v-col>
      <TipDescription :title="traits.eye_color" description="eye_colors"/><br/>
      <TipDescription :title="traits.hair_color" description="hair_colors"/>
    </v-col>
    <v-col>
      <TipDescription :title="traits.face_shape" description="face_shapes"/><br/>
      <TipDescription :title="traits.skin_tone" description="skin_tones"/>
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
