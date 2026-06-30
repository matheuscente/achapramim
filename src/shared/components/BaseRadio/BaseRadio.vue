<template>
    <div class="conteiner">
        <legend class="font-principal" v-if="props.legend">
            {{ props.legend }}
        </legend>

        <div class="radio-item font-paragrafo">
            <label v-for="option in props.options" :key="option.value">
            <input type="radio" :name="props.name" :value="option.value" v-model="checked">
            {{ option.label }}
        </label>
        </div>

    </div>
</template>

<script setup lang="ts">
import type { BaseRadioProps } from '@/shared/types';
import type { SearchType } from '@/shared/types';

const props = defineProps<BaseRadioProps>()
const checked = defineModel<SearchType>()


</script>

<style scoped>
    .conteiner {
        display: flex;
        gap: 1rem;
        align-items: center;
        width: fit-content;
        justify-content: center;
    }

    .radio-item {
        display: flex;
        gap: .3rem;
        align-items: center;
        flex: 1;
        cursor: pointer
    }

    .radio-item input,
    .radio-item label {
        cursor: inherit
    }

    @media (max-width: 500px) {
    .conteiner {
        flex-direction: column;
        gap: .6rem;
    }
}
</style>
