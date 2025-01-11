<script setup>
    import ContainerComponent from '@/components/layout/ContainerComponent.vue'
</script>
<template>
    <footer class="footer">
        <ContainerComponent>
            <RouterLink to="/">
                <img class="logo" src="@/assets/images/logo.png" alt="Логотип" />
            </RouterLink>
            <p>© 2024 Baobei <span>dev by <a target="_blank" href="https://github.com/c0mixz0ne"><span>c</span>omix<span>z</span>one</a></span></p>
            <ul>
                <li>
                    <a href="https://vk.com/baobeinsk">
                        <img src="@/assets/icons/vk.svg" alt="VK" />
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/79139178616?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D1%8F.">
                        <img src="@/assets/icons/wa.svg" alt="WA" />
                    </a>
                </li>
            </ul>
        </ContainerComponent>
    </footer>
</template>
<style lang="scss" scoped>
.footer {
    background-color: var(--pink);
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > * {
            /* flex-grow: 1; */
            width: calc(100% / 3);
        }
        & > p {
            font-size: 14px;
            color: var(--white);
            text-align: center;
            font-weight: lighter;
            & > span{
                font-size: 12px;
                display: block;
                font-weight: lighter;
                & > a{
                    font-family: 'AudioNugget';
                    text-decoration: none;
                    transition: .3s ease;
                    color: var(--white);
                    span{
                        transition: .3s ease;
                    }
                    &:hover{
                        font-size: 25px;
                        color: var(--black);
                        span{
                            color:purple;
                        }
                    }
                }
            }
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

@include breakpoint(sm) {
    .footer{
        padding-bottom: 15px;
        .container{
            flex-direction: column;
            & > *{
                justify-content: center;
                display: flex;
                margin-bottom: 10px;
                width: 100%;
            }
            & > a{
                order: 1;
            }
            & > p{
                flex-direction: column;
                order: 3;
                margin-bottom: 0;
            }
            & > ul{
                justify-content: center;
                order: 2;
                margin-bottom: 10px;
            }
        }
    }
}
</style>
