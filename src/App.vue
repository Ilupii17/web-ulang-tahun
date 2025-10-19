<template>
  <div class="app">
    <FireworksCanvas />
    <StarField />
    <BirthdayTitle />
  </div>
</template>

<script setup>
import BirthdayTitle from './components/BirthdayTitle.vue'
import StarField from './components/StarField.vue'
import FireworksCanvas from './components/FireworksCanvas.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Playfair Display', serif;
}

.app {
  width: 100%;
  height: 100vh;
  background: #000000;
  overflow: hidden;
  position: relative;
}
</style>