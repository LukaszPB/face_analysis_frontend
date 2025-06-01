<template>
  <v-footer
    color="#ffe3e6"
    class="footer"
    padless
  >
    <v-row align="center">
      <v-col align="right">
        <v-img
          src="@/assets/book-cover.jpg"
          max-width="150"
          class="mb-4 rounded"
          alt="Okładka książki"
          @click="goToLink"
          style="cursor: pointer;"
        />
      </v-col>
      <v-col>
        <v-btn
          color="#d63384"
          dark
          large
          href="https://venaart.com/"
          target="_blank"
        >
          Umów się na konsultację
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    goToLink() {
      window.open('https://venaart.com/p/makijaz-dla-kazdego-podrecznik-makijazu/', '_blank', 'noopener,noreferrer');
    }
  }
};
</script>

<style scoped>
.footer {
  border-top: 4px solid #ff99bb;
  display: flex;
  align-items: center;
  padding: 16px;
}

.v-img {
  cursor: pointer;
  transition: transform 0.3s ease;
  max-width: 150px;
  width: 100%;
  height: auto;
}

.v-img:hover {
  transform: scale(1.05);
}
</style>
