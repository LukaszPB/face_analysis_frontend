<template>
  <br>
  <p>{{ randomTip }}</p>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, computed, watch } from 'vue'

const { tm, locale } = useI18n()

// losowy indeks (stały podczas działania komponentu)
const randomIndex = ref(Math.floor(Math.random() * tm('makeup_tips').length))

// computed – zawsze aktualizuje się przy zmianie języka
const randomTip = computed(() => {
  const tips = tm('makeup_tips')
  return tips[randomIndex.value]
})
</script>

<style scoped>
p {
  color: #d63384;
}
</style>
