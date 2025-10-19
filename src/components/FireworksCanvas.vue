<template>
  <canvas ref="canvasRef" class="fireworks-canvas"></canvas>
</template>

<script setup>
import { ref } from 'vue'
import { useFireworks } from '../composables/useFireworks'

const canvasRef = ref(null)

// Initialize fireworks with canvas reference
useFireworks(canvasRef)
</script>

<style scoped>
.fireworks-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>