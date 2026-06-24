<template>
    <form @submit.prevent="search">
        <fieldset>
            <RadioForm v-model="searchType" />
        </fieldset>
        <BaseForm v-bind="formCepConfig" v-model="value.cep" />
    </form>
</template>

<script setup lang="ts">
import BaseForm from '@/shared/components/BaseForm.vue';
import { formCepConfig } from "@/modules/cep/configs/CepFormConfig"
import RadioForm from './RadioForm.vue';
import type { SearchType } from '@/shared/types/types.ts';
import { reactive } from 'vue';
import type { CepValidation } from '@/modules/cep/types/CepValidation.ts';

const searchType = defineModel<SearchType>({
    default: "C"
})

const value = reactive<CepValidation>({
    cep: ''
})

const emit = defineEmits<{
    cepSearch: [cep: string]
}>()

const search = () => {
    emit("cepSearch", value.cep)
}


</script>

<style></style>