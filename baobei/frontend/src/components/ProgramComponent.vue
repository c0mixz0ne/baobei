<template>
    <div class="program">
        <slot>
            Данных нет
        </slot>
    </div>
</template>
<style lang="scss" scoped>
.program{
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    margin-top: 120px;

    &.rtl{
        :slotted(.content){
            order: 1;
        }
        :slotted(.image){
            order: 2;
        }
    }

    &.ltr{
        :slotted(.content){
            order: 2;
        }
        :slotted(.image){
            order: 1;
        }
    }

    :slotted(.content) {
        width: 50%;
    }
    
    :slotted(.image) {
        width: 50%;
        img{
            width: 100%;
        }
    }
}
</style>