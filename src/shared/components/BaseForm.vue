<template>
    <div>
        <fieldset>
            <BaseInput v-bind="props" v-model="value" />
        </fieldset>
        <FormButtons />
    </div>
</template>

<script setup lang="ts">
import type { BaseInputProps } from '../types/types.ts';
import BaseInput from './BaseInput.vue';
import FormButtons from './FormButtons.vue';

const props = defineProps<BaseInputProps>()
const value = defineModel<string>()
</script>

<style scoped></style>