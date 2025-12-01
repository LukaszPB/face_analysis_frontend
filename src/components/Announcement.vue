<template>
  <v-app-bar
    app
    dense
    flat
    class="announcement-bar"
    hide-on-scroll
  >
    <!--TUTAJ PODMIENIASZ LINK OGŁOSZENIA A W PLIKU en.json i pl.json WPISUJESZ WYSWIETLANY TEKST W DWÓCH JĘZYKACH-->
    <a class="title" href="https://venaart.com/" v-text="$t('announcement')"></a>
  </v-app-bar>
</template>

<script>
export default {
  name: "Announcement",
};
</script>

<style scoped>
.announcement-bar {
  background: #f277a8 !important;
  z-index: 100;
}

.title {
  font-size: 28px;
  font-weight: 900;
  color: #fff;
  text-shadow:
    0 0 5px #ff1a75,
    0 0 10px #ff4d94,
    0 0 20px #ff66aa;
  text-align: center;
  width: 100%;
  user-select: none;
  margin: 0;
  padding: 10px 0;
}
</style>
