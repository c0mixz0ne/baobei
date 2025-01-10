<script setup lang="ts">
    import ProgramContainerComponent from '@/components/layout/ProgramContainerComponent.vue';
    import WelcomeComponent from '@/components/WelcomeComponent.vue'
    import AboutProgramComponent from '@/components/AboutProgramComponent.vue';
    import ProgramComponent from '@/components/ProgramComponent.vue';
</script>
<template>
    <WelcomeComponent class="program">
        <h1>Образовательные программы</h1>
    </WelcomeComponent>
    <AboutProgramComponent />
    <ProgramContainerComponent>
        <ProgramComponent class="rtl">
            123
        </ProgramComponent>
        <ProgramComponent class="ltr">
            123
        </ProgramComponent>
    </ProgramContainerComponent>
</template>
