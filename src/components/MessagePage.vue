<template>
  <div class="message-page">
    <button @click="goBack" class="back-button">← Kembali</button>
    
    <div class="message-container fade-in">
      <h2 class="message-title">Pesan Spesial Untukmu 💝</h2>
      
      <div class="message-content">
        <p class="message-text">
          Selamat ulang tahun! 🎉
        </p>
        <p class="message-text">
          Semoga di usia yang baru ini, kamu selalu diberkahi dengan kebahagiaan, 
          kesehatan, dan kesuksesan dalam setiap langkah hidupmu.
        </p>
        <p class="message-text">
          Teruslah menjadi pribadi yang luar biasa seperti sekarang. 
          Semoga semua impian dan harapanmu tercapai! ✨
        </p>
        <p class="message-text signature">
          Dengan cinta, <br>
          <strong>Seseorang yang peduli ❤️</strong>
        </p>
      </div>

      <div class="hearts">
        <span v-for="i in 20" :key="i" class="heart" :style="getHeartStyle(i)">
          💗
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const goBack = () => {
  window.location.hash = ''
}

const getHeartStyle = (i) => {
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    fontSize: `${Math.random() * 1.5 + 1}rem`
  }
}
</script>

<style scoped>
.message-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000000;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.back-button {
  position: fixed;
  top: 30px;
  left: 30px;
  padding: 12px 24px;
  font-size: 1.1rem;
  font-family: 'Playfair Display', serif;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  z-index: 101;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateX(-5px);
}

.message-container {
  max-width: 700px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(255, 105, 180, 0.3);
  position: relative;
  overflow: hidden;
}

.message-title {
  font-family: 'Dancing Script', cursive;
  font-size: 3rem;
  color: #ff69b4;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 0 20px rgba(255, 105, 180, 0.5);
}

.message-content {
  color: white;
  line-height: 2;
}

.message-text {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  text-align: center;
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
}

.message-text:nth-child(1) {
  animation-delay: 0.2s;
}

.message-text:nth-child(2) {
  animation-delay: 0.4s;
}

.message-text:nth-child(3) {
  animation-delay: 0.6s;
}

.message-text:nth-child(4) {
  animation-delay: 0.8s;
}

.signature {
  font-style: italic;
  margin-top: 3rem;
  font-size: 1.2rem;
}

.hearts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.heart {
  position: absolute;
  animation: float 4s ease-in-out infinite;
  opacity: 0.3;
}

.fade-in {
  animation: fadeIn 1.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 768px) {
  .message-container {
    padding: 2rem;
  }
  
  .message-title {
    font-size: 2rem;
  }
  
  .message-text {
    font-size: 1.1rem;
  }
  
  .back-button {
    top: 20px;
    left: 20px;
    padding: 10px 20px;
    font-size: 1rem;
  }
}
</style>