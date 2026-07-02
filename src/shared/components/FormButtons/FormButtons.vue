<template>
    <div class="conteiner-btn">
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

<style scoped>
    .conteiner-btn {
        display: flex;
        gap: 2rem;
    }
    @media (max-width: 500px) {
    .conteiner-btn  {
        flex-direction: column;
        gap: 1.5rem;
        zoom: 80%;
    }

    .conteiner-btn button {
        width: 100%;
    }
}

</style>