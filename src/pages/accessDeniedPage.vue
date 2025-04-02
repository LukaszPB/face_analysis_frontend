<template>
  <div class="access-denied">
    <v-container align="center">
      <v-card class="error-card">
        <v-card-title class="headline">
          <v-icon size="36" color="red">mdi-alert-circle</v-icon>
          Access denied
        </v-card-title>
        <v-card-text>
          <p>Enter this site using official page:</p>
          <a href="https://venaartshop.com/">venaartshop.com</a>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AccessDeniedPage",
};
</script>

<style scoped>
.access-denied {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8d7da;
}

.error-card {
  padding: 20px;
  text-align: center;
  max-width: 400px;
}
</style>
