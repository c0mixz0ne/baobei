<template>
    <section class="form">
        <ContainerComponent>
            <h2>Запишитесь на пробное занятие и мастер-классы!</h2>
            <h3>Оставьте свои контактные данные, и наш администратор свяжется с вами</h3>
            <form action="" method="post">
                <input placeholder="Ваше имя" type="text" />
                <input placeholder="+7 (999) 999-99-99" type="tel" />
                <ButtonComponent type="submit"> Заказать звонок </ButtonComponent>
            </form>
        </ContainerComponent>
    </section>
</template>
<script setup>
import ContainerComponent from '@/components/layout/ContainerComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>
<style lang="scss" scoped>
.form {
    background-image: linear-gradient(rgba(44, 55, 69, 0.8), rgba(44, 55, 69, 0.6)),
        url(@/assets/images/background3.jpg);
    background-size: cover;
    background-position: center center;
    padding: 70px 0;
    .container {
        h2 {
            font-size: 42px;
            color: var(--white);
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
            margin-bottom: 40px;
        }
        h3 {
            max-width: 600px;
            margin: 0 auto;
            font-weight: lighter;
            color: var(--white);
            text-align: center;
        }
        form {
            max-width: 800px;
            margin: 0 auto;
            margin-top: 40px;
            display: flex;
            justify-content: space-between;
            input {
                color: var(--black);
                background-color: var(--white);
                border-radius: 0;
                border: 0;
                padding: 0 20px;
                line-height: 60px;
                font-size: 16px;
                width: 33.3%;
            }
            button {
                margin: 0;
                width: 33.3%;
            }
        }
    }
}

@include breakpoint(md) {
    .form {
        .container {
            form {
                flex-direction: column;
                input {
                    width: 100%;
                    max-width: 500px;
                    margin: 0 auto;
                    margin-bottom: 10px;
                }
                button {
                    margin: 0 auto;
                    width: 100%;
                    max-width: 500px;
                }
            }
        }
    }
}

@include breakpoint(xs) {
    .form {
        padding: 20px 0;
        .container {
            h2 {
                font-size: 32px;
            }
        }
    }
}
</style>
