<template>
    <div>
        <label :for="props.id">
            {{ props.label }}
        </label>

        <input :id="props.id" :type="props.type" :required="props.required" :placeholder="props.placeholder"
            :readonly="props.readOnly" v-model="value">

        <small v-if="props.error">{{ props.error }}</small>
    </div>
</template>

<script setup lang="ts">
import type { BaseInputProps } from '../types/types';

const props = defineProps<BaseInputProps>()
const value = defineModel<string>()

</script>

<style scoped></style>