<template>
  <Header/>
  <v-app>
    <Announcement/>
    <v-main>
      <v-container class="d-flex flex-column align-center justify-center fill-height">
        <ImageAnalyzer @updateTraits="handleTraitsUpdate"/>
        <MakeupTips class="content-container" :traits="traits" v-if="Object.keys(traits).length > 0"/>
      </v-container>
    </v-main>
  </v-app>
  <Footer/>
</template>

<script>
import ImageAnalyzer from "@/components/ImageAnalyzer.vue";
import Header from "@/components/Header.vue";
import MakeupTips from "@/components/MakeupTips.vue";
import Announcement from "@/components/Announcement.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {Footer, Announcement, MakeupTips, ImageAnalyzer, Header },
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
  width: 80%; /* Możesz dostosować szerokość */

}
</style>
