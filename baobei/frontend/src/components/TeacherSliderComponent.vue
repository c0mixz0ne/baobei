<script setup>
import 'vue3-carousel/dist/carousel.css'
import ContainerComponent from './layout/ContainerComponent.vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import teacher0 from '@/assets/images/mock.jpg'
import teacher1 from '@/assets/images/mock.jpg'
import teacher2 from '@/assets/images/mock.jpg'
import teacher3 from '@/assets/images/mock.jpg'
import teacher4 from '@/assets/images/mock.jpg'

// Carousel configuration
const config = {
    itemsToShow: 1,
    snapAlign: 'center',
    gap: 40,

    // 'breakpointMode' determines how the carousel breakpoints are calculated
    // Acceptable values: 'viewport' (default) | 'carousel'
    // 'viewport' - breakpoints are based on the viewport width
    // 'carousel' - breakpoints are based on the carousel width
    breakpointMode: 'carousel',

    // Breakpoints are mobile-first
    // Any settings not specified will fall back to the carousel's default settings
    breakpoints: {
        // 300px and up
        300: {
            itemsToShow: 2,
            snapAlign: 'center'
        },
        // 400px and up
        400: {
            itemsToShow: 3,
            snapAlign: 'start'
        },
        // 500px and up
        500: {
            itemsToShow: 4,
            snapAlign: 'start'
        }
    }
}

const cards = [
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
]
</script>

<template>
    <ContainerComponent class="slider-container">
        <Carousel v-bind="config">
            <Slide v-for="card in cards" :key="card">
                <div class="carousel__item">
                    <img :src="card.photo" alt="Аватар" />
					<div class="slider-content">
						<div class="slider-name">
							{{card.name}}
						</div>
						<div class="slider-text">
							{{card.text}}
						</div>
					</div>
                </div>
            </Slide>
            <template #addons>
                <Navigation>
					<template class="next" #next>
						<span> >> </span>
					</template>
					<template class="prev" #prev>
						<span> << </span>
					</template>
				</Navigation>
            </template>
        </Carousel>
    </ContainerComponent>
</template>

<style lang="scss" scoped>
.carousel__item {
    background-color: var(--slider-background);
    img {
        vertical-align: middle;
		width: 100%;
    }
	.slider-content{
		padding: 18px 20px;
		.slider-name{
			text-align: left;
			font-weight: bold;
			font-size: 16px;
		}
		.slider-text{
			margin-top: 8px;
			text-align: left;
			font-size: 14px;
		}
	}
}

</style>
