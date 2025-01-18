<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted, watch } from 'vue';
import ContainerComponent from '@/components/layout/ContainerComponent.vue';

const mobileMenuIsOpen = ref<boolean>(false);

const toggleMobileMenu = () => {
    mobileMenuIsOpen.value = !mobileMenuIsOpen.value;
};

const resizeHandler = () => {
    if (window.innerWidth > 575) {
        mobileMenuIsOpen.value = false;
    }
};

const scrollHandler = () => {
    if (mobileMenuIsOpen.value) {
        mobileMenuIsOpen.value = false;
    }
};

onMounted(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('scroll', scrollHandler);
});

onUnmounted(() => {
    resizeHandler();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('scroll', scrollHandler);
});
</script>
<template>
    <header class="header">
        <ContainerComponent>
            <RouterLink to="/">
                <img class="logo" src="@/assets/images/logo.jpg" alt="Логотип" />
            </RouterLink>
            <nav>
                <ul class="desktop">
                    <li>
                        <RouterLink to="/">Главная</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/program">Программы</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/group">Группы</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/login">Войти</RouterLink>
                    </li>
                </ul>
                <ul class="mobile">
                    <li>
                        <button @click="toggleMobileMenu" class="burger-menu">
                            <svg v-if="!mobileMenuIsOpen" viewBox="0 0 50 50">
                                <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                            </svg>
                            <svg v-if="mobileMenuIsOpen" viewBox="0 0 50 50">
                                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </ContainerComponent>
        <Transition>
            <div v-if="mobileMenuIsOpen" class="mobile-menu">
                <ul>
                    <li>
                        <RouterLink @click="toggleMobileMenu" to="/">Главная</RouterLink>
                    </li>
                    <li>
                        <RouterLink @click="toggleMobileMenu" to="/program">Программы</RouterLink>
                    </li>
                    <li>
                        <RouterLink @click="toggleMobileMenu" to="/group">Группы</RouterLink>
                    </li>
                    <li>
                        <RouterLink @click="toggleMobileMenu" to="/login">Войти</RouterLink>
                    </li>
                </ul>
            </div>
        </Transition>
    </header>
</template>
<style lang="scss" scoped>
.header {
    background-color: var(--gray);
    height: 90px;
    padding: 10px 0;
    border-bottom: 1px solid var(--pink);
    .logo {
        width: 62px;
        height: 70px;
        vertical-align: middle;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        nav {
            width: 100%;
            margin-left: 10px;

            ul{
                display: flex;
                gap: 15px;
                list-style-type: none;
                margin: 0;
                padding: 0;
                &.mobile {
                    display: none;
                }

                li{
                    a {
                        text-decoration: none;
                        color: var(--black);
                    }

                    a.router-link-active {
                        color: var(--pink);
                    }
                    button.burger-menu{
                        background-color: transparent;
                        border: 0;
                        cursor: pointer;
                        padding: 0;
                        svg{
                            width: 25px;
                            height: 25px;
                        }
                    }
                }


                & :last-child{
                    margin-left: auto;
                }
            }
        }
    }

    .mobile-menu{
        position: absolute;
        width: 100%;
        height: 50px;
        top: 58px;
        left: 0;
        background-color: var(--white-opacity);

        ul{
            height: 100%;
            list-style-type: none;
            margin: 0;
            padding: 0 15px;
            display: flex;
            align-items: center;
            li {
                margin-right: 10px;

                a{
                    text-decoration: none;
                    color: var(--black);
                }
                a.router-link-active {
                        color: var(--pink);
                    }

                &:last-child{
                    margin-right: 0;
                    margin-left: auto;
                }
            }
        }
    }
}

@include breakpoint(xs) {
    .header {
        height: 60px;
        .logo {
            height: 40px;
            width: 36px;
        }
        
        .container {
            nav {
                ul {
                    &.mobile{
                        display: flex;
                    }
                    &.desktop {
                        display: none;
                    }
                }
            }
        }
    }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
