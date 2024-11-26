<template>
  <div class="carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <div class="slide" v-for="card in cards" :key="card">
        <div class="card">
          <div class="image">
            <img :src="card.photo" alt="Фото" />
          </div>
          <div class="content">
            <p class="name">
              {{ card.name }}
            </p>
            <p class="text">
              {{ card.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <button class="nav-button prev" @click="prev">‹</button>
    <button class="nav-button next" @click="next">›</button>
  </div>
</template>
<script>
import teacher0 from '../assets/images/mock.gif'
import teacher1 from '../assets/images/mock.gif'
import teacher2 from '../assets/images/mock.gif'
import teacher3 from '../assets/images/mock.gif'
import teacher4 from '../assets/images/mock.gif'

export default {
  data() {
    return {
      cards: [
        {
          id: 0,
          photo: teacher0,
          name: 'Имя',
          text: 'Текст'
        },
        {
          id: 1,
          photo: teacher1,
          name: 'Имя',
          text: 'Текст'
        },
        {
          id: 2,
          photo: teacher2,
          name: 'Имя',
          text: 'Текст'
        },
        {
          id: 3,
          photo: teacher3,
          name: 'Имя',
          text: 'Текст'
        },
        {
          id: 4,
          photo: teacher4,
          name: 'Имя',
          text: 'Текст'
        },
        {
          id: 5,
          photo: teacher4,
          name: 'Имя',
          text: 'Текст'
        }
      ],
      innerStyles: {},
      step: '',
      transitioning: false
    }
  },

  mounted() {
    this.setStep()
    this.resetTranslate()
  },

  methods: {
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth
      const totalCards = this.cards.length
      this.step = `${innerWidth / totalCards}px`
    },

    next() {
      if (this.transitioning) return

      this.transitioning = true

      this.moveLeft()

      this.afterTransition(() => {
        const card = this.cards.shift()
        this.cards.push(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },

    prev() {
      if (this.transitioning) return

      this.transitioning = true

      this.moveRight()

      this.afterTransition(() => {
        const card = this.cards.pop()
        this.cards.unshift(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },

    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step}) translateX(-${this.step})`
      }
    },

    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step}) translateX(-${this.step})`
      }
    },

    afterTransition(callback) {
      const listener = () => {
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener)
      }
      this.$refs.inner.addEventListener('transitionend', listener)
    },

    resetTranslate() {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`
      }
    }
  }
}
</script>
<style scoped>
.carousel {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}

.slide {
  width: calc(1320px / 4);
  padding: 0 10px;
  display: inline-flex;
  /* optional */
  /* height: 40px; */
  background-color: transparent;
  /* background-color: red; */
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}

.card {
  background-color: transparent;
  width: 100%;
  .image {
    img {
      width: 100%;
    }
  }
  .content {
    padding: 20px;
    color: #000;
    .name {
      font-size: 14px;
      font-weight: bold;
    }
    .text {
      font-size: 12px;
      font-weight: lighter;
    }
  }
}

.nav-button {
  position: absolute;
  top: 50%;
  border-radius: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  color: black;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  &.prev {
    left: 20px;
  }
  &.next {
    right: 20px;
  }
}
</style>
