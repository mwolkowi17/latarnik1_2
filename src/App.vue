<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import MainComp from './components/MainComp.vue'

const scale = ref(1)

function updateScale() {
  const widthRatio = window.innerWidth / 1920
  const heightRatio = window.innerHeight / 1080
  scale.value = Math.min(widthRatio, heightRatio)
}

onMounted(() => {
  updateScale()
  window.addEventListener('resize', updateScale)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScale)
})
</script>

<template>
  <!-- <div :style="{ transform: `scale(${scale})`, transformOrigin: 'top left' }" role="application">
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <div :style="{ transform: `scale(${scale})`, transformOrigin: 'top left' }" role="application">
    <MainComp />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
