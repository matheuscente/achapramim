<template>
    <div>
        <fieldset>
            <BaseInput v-bind="props" v-model="value" :error="props.error" />
        </fieldset>
        <FormButtons />
    </div>
</template>

<script setup lang="ts">
import type { BaseInputProps } from '../../types/index.ts';
import BaseInput from '@/shared/components/BaseInput/BaseInput.vue';
import FormButtons from '@/shared/components/FormButtons/FormButtons.vue';

const props = defineProps<BaseInputProps>()
const value = defineModel<string>()
</script>

<style scoped></style>