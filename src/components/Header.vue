<template>
  <v-app-bar app color="#ffe3e6" density="compact" dark>

    <!-- Lewa strona: Logo + Nazwa -->
    <v-img
      src="https://cdn.shopify.com/s/files/1/0882/8731/4264/files/logo_vena_oko_43b9691e-80a9-4932-97d9-7945255f40cc.png?v=1737390939"
      alt="Vena Art Logo"
      class="logo"
      contain
    />
<!--    <p class="vena-title">Venna Art</p>-->

    <!-- Wyśrodkowanie tytułu -->
<!--    <v-spacer></v-spacer>-->
    <h1 class="title">Vena Art's Makeup Advisor</h1>
    <v-spacer></v-spacer>

    <!-- Przycisk języka po prawej -->
    <v-btn class="language-button" @click="changeLanguage">
      <v-icon>mdi-translate</v-icon>
      {{ languages[index] }}
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      languages: ['en', 'pl'],
      index: 0
    };
  },
  methods: {
    changeLanguage() {
      this.index = (this.index+1)%2
      this.$i18n.locale = this.languages[this.index];
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  flex-grow: 1; /* Dzięki temu tytuł pozostaje na środku */
  color: #d63384;
}
.language-button {
  alignment: right;
  color: #d63384;
  /*background: #D8BFD8;*/
}

.logo {
  height: 40px; /* Dopasowanie wysokości logo */
  width: auto;
  margin-left: 10px;
  alignment: left;
}

.vena-title {
  font-size: 18px;
  color: #d63384;
  font-weight: bold;
}
</style>
