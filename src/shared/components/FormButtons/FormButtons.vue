<template>
    <div>
        <BaseButton type="submit">
            Pesquisar
        </BaseButton>

        <BaseButton type="button" @action="handleClick">
            Voltar
        </BaseButton>
    </div>

</template>

<script setup lang="ts">
import BaseButton from '@/shared/components/BaseButton/BaseButton.vue';
import { goPage } from '@/shared/utils/goPage';

const handleClick = () => {
    goPage("Home")
}


</script>

<style></style>