<template>
  <div class="container">
    <h1>🎂 Selamat Ulang Tahun! 🎂</h1>
    <p class="subtitle">Selamat merayakan hari spesialmu! ✨</p>
  </div>
</template>

<script setup>
// Component untuk menampilkan judul ulang tahun
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  pointer-events: none;
}

h1 {
  font-size: 4rem;
  color: white;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  margin-bottom: 1rem;
  animation: glow 2s ease-in-out infinite;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  padding: 0 2rem;
  letter-spacing: 1px;
}

@keyframes glow {
  0%, 100% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
  50% {
    text-shadow: 0 0 30px rgba(255, 255, 255, 1), 0 0 40px rgba(255, 255, 255, 0.8);
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
  .subtitle {
    font-size: 1.2rem;
  }
}
</style>