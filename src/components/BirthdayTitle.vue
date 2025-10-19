<template>
  <div class="container">
    <h1 class="fade-in">Selamat Ulang Tahun!</h1>
    <p class="subtitle fade-in-delay">untuk firah heheh</p>
    <button @click="goToMessage" class="message-button fade-in-delay-2">
      Lihat Pesan Spesial 💌
    </button>
  </div>
</template>

<script setup>
const goToMessage = () => {
  // Emit event ke parent atau gunakan router
  window.location.hash = '#message'
}
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

.fade-in {
  animation: fadeIn 2s ease-in, glow 2s ease-in-out infinite;
}

.fade-in-delay {
  opacity: 0;
  animation: fadeIn 2s ease-in 0.5s forwards;
}

.fade-in-delay-2 {
  opacity: 0;
  animation: fadeIn 2s ease-in 1s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  padding: 0 2rem;
  letter-spacing: 1px;
  margin-bottom: 2rem;
}

.message-button {
  padding: 15px 40px;
  font-size: 1.2rem;
  font-family: 'Playfair Display', serif;
  background: linear-gradient(135deg, #ff69b4, #ff1493);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.4);
  pointer-events: auto;
  letter-spacing: 1px;
}

.message-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 105, 180, 0.6);
  background: linear-gradient(135deg, #ff1493, #ff69b4);
}

.message-button:active {
  transform: translateY(-1px);
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
  .message-button {
    font-size: 1rem;
    padding: 12px 30px;
  }
}
</style>