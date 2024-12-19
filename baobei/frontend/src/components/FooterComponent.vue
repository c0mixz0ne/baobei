<template>
    <footer class="footer">
        <ContainerComponent>
            <RouterLink to="/">
                <img class="logo" src="@/assets/images/logo.png" alt="Логотип" />
            </RouterLink>
            <p>© 2024 Baobei</p>
            <ul>
                <li>
                    <a href="https://vk.com/baobeinsk">
                        <img src="@/assets/icons/vk.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://wa.me/79139178616?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D1%8F."
                    >
                        <img src="@/assets/icons/wa.svg" alt="" />
                    </a>
                </li>
            </ul>
        </ContainerComponent>
    </footer>
</template>
<script setup>
import ContainerComponent from '@/components/layout/ContainerComponent.vue'
</script>
<style scoped>
.footer {
    background-color: var(--pink);
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > * {
            flex-grow: 1;
        }
        & > p {
            font-size: 14px;
            color: var(--white);
            text-align: center;
            font-weight: bold;
        }
        & > ul {
            list-style-type: none;
            justify-content: end;
            margin: 0;
            padding: 0;
            display: flex;
            li {
                margin-right: 5px;
                a {
                    img {
                        vertical-align: middle;
                    }
                }
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
    .logo {
        max-width: 150px;
        height: 150px;
    }
}
</style>
