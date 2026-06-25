<template>
    <div>
        <legend v-if="props.legend">
            {{ props.legend }}
        </legend>

        <label v-for="option in props.options" :key="option.value">
            <input type="radio" :name="props.name" :value="option.value" v-model="checked">
            {{ option.label }}
        </label>
    </div>
</template>

<script setup lang="ts">
import type { BaseRadioProps } from '@/shared/types';
import type { SearchType } from '@/shared/types';

const props = defineProps<BaseRadioProps>()
const checked = defineModel<SearchType>()


</script>

<style scoped></style>
