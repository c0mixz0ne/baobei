<script setup lang="ts">
import { shallowRef } from 'vue';
import { 
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapControls,
    YandexMapZoomControl,
    YandexMapMarker,
    YandexMapDefaultFeaturesLayer,
    YandexMapOpenMapsButton,
    YandexMapGeolocationControl
} from 'vue-yandex-maps';

import type { YMap, LngLat } from '@yandex/ymaps3-types';
import logo from '../assets/images/logo.png';

const baobeicoordsa: number = import.meta.env.VITE_BAOBEI_COORDS_A;
const baobeicoordsb: number = import.meta.env.VITE_BAOBEI_COORDS_B;

const markers = [
    {
        coordinates: [baobeicoordsa, baobeicoordsb] as LngLat,
        iconSrc: logo,
    },
];

//Можно использовать для различных преобразований
const map = shallowRef<null | YMap>(null);

const openMap = () => {
    console.log(1);
}

const getTaxi = () => {
    console.log(2);
}

</script>
<template>
    <section class="navigation">
        <div class="contacts">
            <h5>Контакты</h5>
            <ul>
                <li><a href="tel:+79139178616">+7(913)917-86-16</a></li>
                <li><a href="mailto:baobei.nsk@gmail.com">baobei.nsk@gmail.com</a></li>
                <li>Семьи Шамшиных 18/1, оф. 5</li>
                <li class="time-work">Пн-Пт — 8:00-21:00</li>
                <li class="time-work">Сб-Вс — 9:00-21:00</li>
            </ul>
        </div>
        <yandex-map
            v-model="map"
            :class="[{ 'map': true }]"
            :settings="{
                location: {
                center: [baobeicoordsa, baobeicoordsb],
                zoom: 15,
                },
                behaviors: ['drag', 'dblClick'], // Отключаем scrollZoom
            }"
            
        >
            <yandex-map-default-scheme-layer/>
            <yandex-map-controls :settings="{ position: 'right' }">
                <yandex-map-zoom-control/>
            </yandex-map-controls>
            <!-- <yandex-map-controls :settings="{ position: 'left bottom' }">
                <yandex-map-open-maps-button :settings="{ title: 'Как добраться' }"/>
            </yandex-map-controls> -->
            <!-- <yandex-map-controls :settings="{ position: 'left top' }">
                <yandex-map-geolocation-control/>
            </yandex-map-controls> -->
            <yandex-map-default-features-layer/>
            <yandex-map-marker
                v-for="marker in markers"
                :key="marker.iconSrc"
                position="top-center left-center"
                :settings="{ coordinates: marker.coordinates }"
            >
                <img
                    alt=""
                    class="pin"
                    :src="marker.iconSrc"
                >
            </yandex-map-marker>
        </yandex-map>
    </section>
</template>
<style lang="scss" scoped>
// TODO: find fix important rule
.map {
    width: 100%!important;
    height: 600px!important;
    cursor: grab;
    &:active{
        cursor: grabbing;
    }
    .pin {
        cursor: pointer;
        max-width: unset;
        width: 75px;
        height: 75px;
        border-radius: 50%;
    }
}
.navigation{
    position: relative;
    .contacts{
        z-index: 2;
        background-color: var(--border-pink);
        position: absolute;
        top: 50%;
        left: 120px;
        transform: translateY(-50%);
        padding: 60px;
        h5{
                margin-bottom: 30px;
                font-size: 28px;
                color: var(--white);
                font-weight: bold;
            }
        ul{
            list-style-type: none;
            margin: 0;
            padding: 0;
            color: var(--white);
            li{
                font-weight: lighter;
                margin-bottom: 10px;
                a{
                    text-decoration: none;
                    color: var(--white);
                    font-weight: lighter;
                }
                &.time-work{
                    margin-top: 30px;
                }
            }
            & :last-child{
                margin-bottom: 0;
            }
        }
    }
}

@include breakpoint(md){
    .navigation{
        display: flex;
        flex-direction: column;
        .contacts{
            position: relative;
            top: unset;
            left: unset;
            transform: unset;
            order:2;
            padding: 20px;
        }
    }
}

@include breakpoint(sm){
    .map{
        height: 50svh!important;
    }
}
</style>
