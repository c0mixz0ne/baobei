<script>
export default {
  data() {
    return {
      currentIndex: 0,
      intervalId: null,
      slides: [
        { background: 'url(https://via.placeholder.com/800x600/FF5733/FFFFFF?text=Slide+1)', title: 'Slide 1', text: 'Content for slide 1' },
        { background: 'url(https://via.placeholder.com/800x600/33FF57/FFFFFF?text=Slide+2)', title: 'Slide 2', text: 'Content for slide 2' },
        { background: 'url(https://via.placeholder.com/800x600/3357FF/FFFFFF?text=Slide+3)', title: 'Slide 3', text: 'Content for slide 3' },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    startAutoPlay() {
      this.intervalId = setInterval(this.nextSlide, 3000);
    },
    stopAutoPlay() {
      clearInterval(this.intervalId);
    },
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeDestroy() {
    this.stopAutoPlay();
  },
};
</script>

<template>
  <div class="slider" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
    <transition name="fade">
      <div 
        class="slide" 
        :key="currentIndex" 
        :style="{ backgroundImage: slides[currentIndex].background }"
      >
        <div class="content">
          <h1>{{ slides[currentIndex].title }}</h1>
          <p>{{ slides[currentIndex].text }}</p>
        </div>
      </div>
    </transition>
    <button @click="prevSlide" class="nav-button prev">‹</button>
    <button @click="nextSlide" class="nav-button next">›</button>
  </div>
</template>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease-in-out;
}

.content {
  text-align: center;
  backdrop-filter: blur(5px); /* Эффект размытия фона */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}
</style>