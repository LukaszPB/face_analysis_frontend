<template>
  <v-container class="d-flex flex-column align-center justify-center fill-height">
    <Header/>
    <ImageAnalyzer @updateTraits="handleTraitsUpdate"/>
    <MakeupTips class="content-container" :traits="traits" v-if="Object.keys(this.traits).length > 0"/>
  </v-container>
</template>

<script>
import ImageAnalyzer from "@/components/ImageAnalyzer.vue";
import Header from "@/components/Header.vue";
import MakeupTips from "@/components/MakeupTips.vue";
export default {
  components: {MakeupTips, ImageAnalyzer, Header },
  data() {
    return {
      traits: {}
    };
  },
  methods: {
    handleTraitsUpdate(newTraits) {
      this.traits = newTraits;
    }
  }
};
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: row;
  width: 100%; /* Możesz dostosować szerokość */

}
</style>
