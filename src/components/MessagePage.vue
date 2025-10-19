<template>
  <div class="message-page">
    <button @click="goBack" class="back-button">← Kembali</button>
    
    <div class="message-container fade-in">
      <h2 class="message-title">Pesan Spesial Untukmu 💝</h2>
      
      <div class="message-content">
        <transition name="slide" mode="out-in">
          <div :key="currentSlide" class="slide">
            <p v-for="(paragraph, index) in messages[currentSlide]" 
               :key="index" 
               class="message-text"
               :style="{ animationDelay: `${index * 0.2}s` }">
              {{ paragraph }}
            </p>
          </div>
        </transition>
      </div>

      <!-- Navigation -->
      <div class="navigation">
        <button 
          @click="prevSlide" 
          class="nav-button"
          :disabled="currentSlide === 0"
          :class="{ disabled: currentSlide === 0 }">
          ← Sebelumnya
        </button>
        
        <div class="dots">
          <span 
            v-for="(msg, index) in messages" 
            :key="index"
            class="dot"
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)">
          </span>
        </div>
        
        <button 
          @click="nextSlide" 
          class="nav-button"
          :disabled="currentSlide === messages.length - 1"
          :class="{ disabled: currentSlide === messages.length - 1 }">
          Selanjutnya →
        </button>
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
import { ref } from 'vue'

const currentSlide = ref(0)

// KAMU BISA TAMBAH ATAU EDIT PESAN DI SINI!
// Setiap array adalah 1 slide, bisa berisi beberapa paragraf
const messages = ref([
  [
    'read it slowly :)'
  ],
  [
    'Selamat ulang tahun firahhh! 🎉',
    'Hari ini adalah hari spesial untukmu, dan aku cuma pengen kamu tahu betapa berartinya kehadiranmu dalam hidup ini. eaa tapi jujur',
    'Semoga di usia yang baru ini, kamu selalu diberkahi dengan kebahagiaan yang melimpah.'
  ],
  [
    'Semoga Allah selalu memberikan kesehatan',
    'diberikan kekuatan hati yang lapang untuk menerima semua takdir nya,,, aminnnn',
    'Semoga kamu di berikan kemudahan dalam setiap hal yang kamu lakukan',
    'tetap jadi anak yang baik buat orang tua dan teman teman mu yaa',
    'Jangan pernah berhenti menjadi dirimu sendiri! ✨'
  ],
  [
    'i hope you have the greatest year yet and that you get to do as many amazing thing you can dream of',
    'you are so many amazing ways. you shine like a ing star 🌟 in everything you do',
    'i hope you have an incredible year! and i hope all your birthday dreams come true :)'
  ],
  [
    'semoga semesta turut mengaminkan dan bisa mendatangkan hal hal baik buat kamu hari ini besok dan seterusnya',
    'hari ini jangan sedih sedih okee?? klo ulang tahun harus happy happy yaa ahahahahaha',
    'i wish your birthday and everyday will be filled with the warmth of sunshine..'
  ],
  [
    'Terima kasih sudah menjadi bagian dari hidupku :)',
    'aku harap kamu bisa bahagia disana hihi',
    'selamat ulang tahun sekali lagiii',
  ],
  [
    'last'
  ],
  [
    'kamu adalah keindahan semesta dalam bentuk lainnn ❤️❤️',
    'Semoga hari ini dan hari-hari selanjutnya penuh dengan senyuman',
    'loved u',
    'dari aku yang pernah singgah di hidup mu :)'
  ]
])

const nextSlide = () => {
  if (currentSlide.value < messages.value.length - 1) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const goToSlide = (index) => {
  currentSlide.value = index
}

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
  max-width: 800px;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(255, 105, 180, 0.3);
  position: relative;
  overflow: hidden;
  min-height: 500px;
  display: flex;
  flex-direction: column;
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
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  line-height: 2;
  min-height: 300px;
}

.slide {
  width: 100%;
}

.message-text {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  text-align: center;
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-button {
  padding: 12px 24px;
  font-size: 1rem;
  font-family: 'Playfair Display', serif;
  background: #ff69b4;
  color: white;
  border: 2px solid #ff1493;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.nav-button:hover:not(.disabled) {
  background: #ff1493;
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.5);
}

.nav-button.disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.dots {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex: 1;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: #ff69b4;
  transform: scale(1.3);
  box-shadow: 0 0 10px rgba(255, 105, 180, 0.8);
}

.dot:hover {
  background: rgba(255, 105, 180, 0.7);
  transform: scale(1.2);
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

/* Slide transitions */
.slide-enter-active, .slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-50px);
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
    padding: 2rem 1.5rem;
    min-height: 450px;
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

  .navigation {
    flex-direction: column;
    gap: 1.5rem;
  }

  .nav-button {
    width: 100%;
    padding: 15px;
  }

  .dots {
    order: -1;
  }
}
</style>