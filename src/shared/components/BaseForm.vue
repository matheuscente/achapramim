<template>
    <form @submit.prevent>
        <fieldset>
            <BaseInput v-bind="props" />
        </fieldset>
        <FormButtons />
    </form>
</template>

<script setup lang="ts">
import type { BaseInputProps } from '../types/types.ts';
import BaseInput from './BaseInput.vue';
import FormButtons from './FormButtons.vue';

const props = defineProps<BaseInputProps<unknown>>()
</script>

<style scoped></style>