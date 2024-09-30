<script lang="ts">
export default {
    methods: {
        buttonAction(){
            console.log('action');
        }
    }
}
</script>
<template>
    <section class="recruitment">
        <div class="image-container">
            <h2>
                Набор в группы на 2024-2025 учебный год
            </h2>
        </div>
        <button @click="buttonAction" class="button">
            Запись на занятия
        </button>
    </section>
</template>