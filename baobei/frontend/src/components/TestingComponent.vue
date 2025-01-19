<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import ContainerComponent from './layout/ContainerComponent.vue';

const typeEducation = ref<never[]>([]);

// TODO: types
const setIputValue = (event: any, question: any, option: string) => {     
    if (event.target.checked) {
        if (event.target.parentElement.querySelector('.custom-wrapper')){
            
            event.target.parentElement.querySelector('.custom-wrapper').querySelector('.custom').classList.add('show');
            event.target.parentElement.querySelector('.custom-wrapper').querySelector('.custom').focus();
        }

        question.push(option);

    } else {
        if (event.target.parentElement.querySelector('.custom-wrapper')){
            event.target.parentElement.querySelector('.custom-wrapper').querySelector('.custom').classList.remove('show');
            event.target.parentElement.querySelector('.custom-wrapper').querySelector('.custom').value = '';
        }

        const index = question.indexOf(option);

        question.splice(index, 1);
    }
}

const customHandler = (event: any, question: any) => {
    const searchOption = 'Свой вариант';

    const foundOption = question.find((question: any) => question.includes(searchOption));

    const index = question.indexOf(foundOption);

    question[index] = `Свой вариант: ${event.target.value.length ? event.target.value : ' Не указан'}`;    
}
</script>

<template>
    <section class="testing">
        <ContainerComponent>
            <form @submit.prevent class="testing-form">
                <div id="question-1" class="question">
                    <input :value="typeEducation" name="Какое направление вас заинтересовало?" type="hidden">
                    <p class="question-title">
                        Какое направление вас заинтересовало? {{ typeEducation }}
                    </p>
                    <ul class="checkbox-list">
                        <li class="checkbox-item">
                            <label for="one">
                                <input @input="setIputValue($event, typeEducation, 'Русский язык')" id="one" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <span>Русский язык</span>
                            </label>
                        </li>
                        <li class="checkbox-item">
                            <label for="two">
                                <input @input="setIputValue($event, typeEducation, 'Английский язык')" id="two" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <span>Английский язык</span>
                            </label>
                        </li>
                        <li class="checkbox-item">
                            <label for="three">
                                <input @input="setIputValue($event, typeEducation, 'Математика')" id="three" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <span>Математика</span>
                            </label>
                        </li>
                        <li class="checkbox-item">
                            <label for="four">
                                <input @input="setIputValue($event, typeEducation, 'Дошкольная подготовка')" id="four" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <span>Дошкольная подготовка</span>
                            </label>
                        </li>
                        <li class="checkbox-item">
                            <label for="five">
                                <input @input="setIputValue($event, typeEducation, 'Китайский язык')" id="five" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <span>Китайский язык</span>
                            </label>
                        </li>
                        <li class="checkbox-item">
                            <label for="six">
                                <input @input="setIputValue($event, typeEducation, 'Свой вариант')" id="six" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <div class="custom-wrapper">
                                    <span>Свой вариант</span>
                                    <input @blur="customHandler($event, typeEducation)" class="custom" type="text" maxlength="250">
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
            </form>
        </ContainerComponent>
    </section>
</template>

<style land="scss" scoped>
.testing{
    padding: 100px 0;

    .container {
        max-width: 800px;
    }

    .testing-form{
        display: flex;
        flex-direction: column;
        
        .question{
            .question-title{
                color:var(--black);
                font-size: var(--font-size);
                font-weight: bold;
                margin-bottom: 15px;
            }

            .checkbox-list{
                list-style-type: none;
                margin: 0;
                padding: 0;

                .checkbox-item{
                    display: flex;
                    margin-bottom: 15px;


                    label {
                        display: flex;
                        cursor: pointer;
                        width: 100%;
                        font-size: var(--font-size);

                        span{
                            font-weight: lighter;
                        }
                    }

                    .check{
                        opacity: 0;
                        z-index: -1;
                        position: absolute;

                        &:checked ~ .checkbox-indicator { 
                            opacity: 1;
                            
                            &::after{
                                display: block;
                            }
                       }
                    }

                    .checkbox-indicator{
                        min-width: 20px;
                        max-width: 20px;
                        min-height: 20px;
                        max-height: 20px;
                        border: 2px solid var(--black);
                        position: relative;
                        margin-right: 10px;
                        opacity: .5;

                        &::after{
                            display: none;
                            border: solid var(--pink);
                            border-width: 0 2px 2px 0;
                            content: "";
                            height: 24px;
                            left: 4px;
                            position: absolute;
                            top: -9px;
                            transform: rotate(45deg);
                            width: 11px;
                        }
                    }

                    .custom-wrapper{
                        display: flex;
                        width: 100%;

                        span{
                            flex-shrink: 0;
                        }

                        .custom {
                            display: none;
                            background-color: transparent;
                            border: none;
                            margin-top: -2px;
                            vertical-align: middle;
                            margin-left: 10px;
                            border-bottom: 1px solid var(--black);
                            width: 100%;
                            font-size: var(--font-size);
                            &.show{
                                display: block;
                            }

                            &:focus {
                                outline: none;
                            }
                        }

                    }

                    &:last-child{
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
</style>