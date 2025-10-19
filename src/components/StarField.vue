<template>
  <div class="star-field">
    <div
      v-for="star in stars"
      :key="star.id"
      class="star"
      :style="star.style"
    >
      ✨
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const stars = ref([])

const createStars = () => {
  const starCount = 50
  const starArray = []
  
  for (let i = 0; i < starCount; i++) {
    starArray.push({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        fontSize: `${Math.random() * 1 + 0.5}rem`
      }
    })
  }
  
  stars.value = starArray
}

onMounted(() => {
  createStars()
})
</script>

<style scoped>
.star-field {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  pointer-events: none;
}

.star {
  position: fixed;
  color: #ff69b4;
  animation: twinkle 3s ease-in-out infinite;
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}
</style>