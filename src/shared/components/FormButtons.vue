<template>
    <div>
        <BaseButton type="submit">
            Pesquisar
        </BaseButton>

        <BaseButton type="button" @action="back">
            Voltar
        </BaseButton>
    </div>

</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';
import { back } from '../utils/btnBack.ts';


</script>

<style></style>