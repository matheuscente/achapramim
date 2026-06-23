<template>
    <div>
        <legend v-if="props.legend"></legend>

        <label v-for="option in props.options" :key="option.value">
            <input type="radio" :name="props.name" :value="option.value" v-model="checked">
            {{ option.label }}
        </label>
    </div>
</template>

<script setup lang="ts">
import type { BaseRadioProps } from '../types/types';

const props = defineProps<BaseRadioProps>()
const checked = defineModel<string>()

</script>

<style scoped></style>
