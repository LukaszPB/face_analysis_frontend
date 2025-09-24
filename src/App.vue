<template>
  <v-app >
    <router-view />
  </v-app>
</template>

<script>
import router from "@/router/index.js";

export default {
  // TEN FRAGMENT KODU ODKOMENTUJESZ I WSTAWISZ WASZ NOWY URL Z KTÓREGO MACIE DOPUSZCZAĆ DOSTĘP
  // beforeCreate() {
  //    const allowedReferrer = "http://127.0.0.1:5500/";
  //    console.log(document.referrer)
  //    if (document.referrer !== allowedReferrer) {
  //      router.push("/access-denied");
  //    }
  // }
};
</script>
<style>
.v-application {
  background: linear-gradient(135deg, #FADADD, #D8BFD8) !important; /* Gradient: róż → fiolet */
}
</style>
