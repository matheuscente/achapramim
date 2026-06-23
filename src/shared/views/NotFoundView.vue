<template>
    <div>
        <h1>Página não encontrada!</h1>

        <BaseButton type="button" @action="back">
            Voltar
        </BaseButton>
    </div>

</template>

<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue';
import { back } from '../utils/btnBack.ts';

</script>