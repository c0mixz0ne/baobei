<template>
    <div class="slider" @click="nextSlide">
      <transition name="fade">
        <div class="slide" v-if="currentSlideIndex !== null">
          <img :src="slides[currentSlideIndex].image" alt="Slide Image" />
          <h2>{{ slides[currentSlideIndex].caption }}</h2>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentSlideIndex: 0,
        slides: [
          { image: 'https://via.placeholder.com/1920x1080?text=Slide+1', caption: 'Caption for Slide 1' },
          { image: 'https://via.placeholder.com/1920x1080?text=Slide+2', caption: 'Caption for Slide 2' },
          { image: 'https://via.placeholder.com/1920x1080?text=Slide+3', caption: 'Caption for Slide 3' },
        ],
      };
    },
    mounted() {
      this.startSlider();
    },
    methods: {
      startSlider() {
        setInterval(() => {
          this.nextSlide();
        }, 5000); // 5 seconds delay for each slide
      },
      nextSlide() {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
      },
    },
  };
  </script>
  
  <style scoped>
  .slider {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
  }
  
  .slide {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>