<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import ContainerComponent from './layout/ContainerComponent.vue';

const typeEducation = ref<never[]>([]);
const yearsOld = ref<never[]>([]);
const formatLesson = ref<never[]>([]);
const durationStudy = ref<never[]>([]);
const studentName = ref();

// TODO: fix types
const setCheckbox = (event: any, question: any, option: string) => {     
    if (event.target.checked) {
        if (event.target.parentElement.querySelector('.custom-wrapper')) {
            
            event.target.parentElement.querySelector('.custom-wrapper').querySelector('.custom').classList.add('show');
            event.target.parentElement.querySelector('.custom-wrapper').querySelector('.custom').focus();
        }

        question.push(option);

    } else {
        if (event.target.parentElement.querySelector('.custom-wrapper')) {
            event.target.parentElement.querySelector('.custom-wrapper').querySelector('.custom').classList.remove('show');
            event.target.parentElement.querySelector('.custom-wrapper').querySelector('.custom').value = '';
        }

        const index = question.indexOf(option);

        question.splice(index, 1);
    }
}

const customCheckboxHandler = (event: any, question: any) => {
    const searchOption = 'Свой вариант';

    const foundOption = question.find((question: any) => question.includes(searchOption));

    const index = question.indexOf(foundOption);

    question[index] = `Свой вариант: ${event.target.value.length ? event.target.value : 'Не указан'}`;    
}

const setRadio = (event: any, question: any, option: string) => {
    if (event.target.parentElement.querySelector('.custom-wrapper')) {
        event.target.parentElement.querySelector('.custom-wrapper').querySelector('.custom').classList.add('show');
        event.target.parentElement.querySelector('.custom-wrapper').querySelector('.custom').focus();
    } else {
        // TODO: fix
        event.target.parentElement.parentElement.parentElement.querySelector('.custom').classList.remove('show');
        event.target.parentElement.parentElement.parentElement.querySelector('.custom').value = '';

        question[0] = '';
    }

    question[0] = option;        
}

const customRadioHandler = (event: any, question: any) => {
    question[0] = `Свой вариант: ${event.target.value.length ? event.target.value : 'Не указан'}`; 
    console.log(question);
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
                            <label for="q-1-1">
                                <input @input="setCheckbox($event, typeEducation, 'Русский язык')" id="q-1-1" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <span>Русский язык</span>
                            </label>
                        </li>
                        <li class="checkbox-item">
                            <label for="q-1-2">
                                <input @input="setCheckbox($event, typeEducation, 'Английский язык')" id="q-1-2" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <span>Английский язык</span>
                            </label>
                        </li>
                        <li class="checkbox-item">
                            <label for="q-1-3">
                                <input @input="setCheckbox($event, typeEducation, 'Математика')" id="q-1-3" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <span>Математика</span>
                            </label>
                        </li>
                        <li class="checkbox-item">
                            <label for="q-1-4">
                                <input @input="setCheckbox($event, typeEducation, 'Дошкольная подготовка')" id="q-1-4" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <span>Дошкольная подготовка</span>
                            </label>
                        </li>
                        <li class="checkbox-item">
                            <label for="q-1-5">
                                <input @input="setCheckbox($event, typeEducation, 'Китайский язык')" id="q-1-5" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <span>Китайский язык</span>
                            </label>
                        </li>
                        <li class="checkbox-item">
                            <label for="q-1-6">
                                <input @input="setCheckbox($event, typeEducation, 'Свой вариант')" id="q-1-6" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <div class="custom-wrapper">
                                    <span>Свой вариант</span>
                                    <input @blur="customCheckboxHandler($event, typeEducation)" class="custom" type="text" maxlength="250">
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div id="question-2" class="question">
                    <input :value="yearsOld" name="Сколько лет поступающему на обучение?" type="hidden">
                    <p class="question-title">
                        Сколько лет поступающему на обучение? {{ yearsOld }}
                    </p>
                    <ul class="checkbox-list">
                        <li class="checkbox-item">
                            <label for="q-2-1">
                                <input @input="setCheckbox($event, yearsOld, 'Меньше 5')" id="q-2-1" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <span>Меньше 5</span>
                            </label>
                        </li>
                        <li class="checkbox-item">
                            <label for="q-2-2">
                                <input @input="setCheckbox($event, yearsOld, '5-7 лет')" id="q-2-2" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <span>5-7 лет</span>
                            </label>
                        </li>
                        <li class="checkbox-item">
                            <label for="q-2-3">
                                <input @input="setCheckbox($event, yearsOld, '7-10 лет')" id="q-2-3" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <span>7-10 лет</span>
                            </label>
                        </li>
                        <li class="checkbox-item">
                            <label for="q-2-4">
                                <input @input="setCheckbox($event, yearsOld, '10-14 лет')" id="q-2-4" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <span>10-14 лет</span>
                            </label>
                        </li>
                        <li class="checkbox-item">
                            <label for="q-2-5">
                                <input @input="setCheckbox($event, yearsOld, '14-17 лет')" id="q-2-5" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <span>14-17 лет</span>
                            </label>
                        </li>
                        <li class="checkbox-item">
                            <label for="q-2-6">
                                <input @input="setCheckbox($event, yearsOld, 'Больше 17')" id="q-2-6" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <span>Больше 17</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div id="question-3" class="question">
                    <input :value="formatLesson" name="Какой формат занятий вам интересен?" type="hidden">
                    <p class="question-title">
                        Какой формат занятий вам интересен? {{ formatLesson }}
                    </p>
                    <ul class="checkbox-list">
                        <li class="checkbox-item">
                            <label for="q-3-1">
                                <input @input="setCheckbox($event, formatLesson, 'Групповые')" id="q-3-1" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <span>Групповые</span>
                            </label>
                        </li>
                        <li class="checkbox-item">
                            <label for="q-3-2">
                                <input @input="setCheckbox($event, formatLesson, 'Индивидуальные')" id="q-3-2" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <span>Индивидуальные</span>
                            </label>
                        </li>
                        <li class="checkbox-item">
                            <label for="q-3-3">
                                <input @input="setCheckbox($event, formatLesson, 'Свой вариант')" id="q-3-3" class="check" type="checkbox">
                                <div class="checkbox-indicator"></div>
                                <div class="custom-wrapper">
                                    <span>Свой вариант</span>
                                    <input @blur="customCheckboxHandler($event, formatLesson)" class="custom" type="text" maxlength="250">
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div id="question-4" class="question">
                    <input :value="formatLesson" name="Срок обучения для достижения вашей цели?" type="hidden">
                    <p class="question-title">
                        Срок обучения для достижения вашей цели? {{ durationStudy }}
                    </p>
                    <ul class="radio-list">
                        <li class="radio-item">
                            <label for="q-4-1">
                                <input @input="setRadio($event, durationStudy, 'Пару месяцев')" id="q-4-1" class="check" type="radio" name="radio">
                                <div class="checkbox-indicator"></div>
                                <span>Пару месяцев</span>
                            </label>
                        </li>
                        <li class="radio-item">
                            <label for="q-4-2">
                                <input @input="setRadio($event, durationStudy, 'Пол года')" id="q-4-2" class="check" type="radio" name="radio">
                                <div class="checkbox-indicator"></div>
                                <span>Пол года</span>
                            </label>
                        </li>
                        <li class="radio-item">
                            <label for="q-4-3">
                                <input @input="setRadio($event, durationStudy, 'Год')" id="q-4-3" class="check" type="radio" name="radio">
                                <div class="checkbox-indicator"></div>
                                <span>Год</span>
                            </label>
                        </li>
                        <li class="radio-item">
                            <label for="q-4-4">
                                <input @input="setRadio($event, durationStudy, 'Больше года')" id="q-4-4" class="check" type="radio" name="radio">
                                <div class="checkbox-indicator"></div>
                                <span>Больше года</span>
                            </label>
                        </li>
                        <li class="radio-item">
                            <label for="q-4-5">
                                <input @input="setRadio($event, durationStudy, 'Свой вариант')" id="q-4-5" class="check" type="radio" name="radio">
                                <div class="checkbox-indicator"></div>
                                <div class="custom-wrapper">
                                    <span>Свой вариант</span>
                                    <input @blur="customRadioHandler($event, durationStudy)" class="custom" type="text" maxlength="250">
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="question">
                    <p class="question-title">
                        Ваше имя {{ studentName }}
                        <input class="long-input" v-model="studentName" type="text">
                    </p>
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
            margin-bottom: 30px;
            padding: 5px;
            &.error{
                outline: 1px solid var(--error);
            }
            .long-input {
                width: 100%;
                display: block;
                outline: none;
                margin-top: 20px;
                border: none;
                border-bottom: 1px solid var(--black);
                font-size: var(--font-size);
            }

            .question-title {
                color:var(--black);
                font-size: var(--font-size);
                font-weight: bold;
                margin-bottom: 15px;
            }

            .checkbox-list {
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

            .radio-list {
                list-style-type: none;
                margin: 0;
                padding: 0;

                .radio-item{
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
                        border-radius: 50%;
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

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>