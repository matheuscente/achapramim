<template>
    <div class="font-paragrafo input">
        <label :for="props.id">
            {{ props.label }}
        </label>

        <input :id="props.id" :type="props.type" :required="props.required" :placeholder="props.placeholder"
            :readonly="props.readOnly" v-model="value">

        <small v-if="props.error">{{ props.error }}</small>
    </div>
</template>

<script setup lang="ts">
import type { BaseInputProps } from '@/shared/components/BaseInput/BaseInputProps';

const props = defineProps<BaseInputProps>()
const value = defineModel<string>()

</script>

<style scoped>
.input {
    display: flex;
    width: 100%;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
}
    .font-paragrafo input,
    .font-paragrafo label {
        font: inherit;
    }

    .font-paragrafo input {
        padding: 8px;
        border-radius: 4px;
    }

    @media (max-width: 500px) {
    .input {
        flex-direction: column;
        gap: .5rem;
        align-items:start;
    }

    .input input {
        max-width: 80vw;
    }
}
</style>