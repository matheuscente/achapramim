<template>
    <form @submit.prevent="search">
        <fieldset>
            <RadioForm v-model="searchType" />
        </fieldset>
        <BaseForm v-bind="formCepConfig" v-model="formData.data.cep" :error="errors.cep" />
    </form>
</template>

<script setup lang="ts">
import BaseForm from '@/shared/components/BaseForm/BaseForm.vue';
import { formCepConfig } from "@/modules/cep/configs/CepFormConfig"
import RadioForm from './RadioForm.vue';
import type { SearchType } from '@/shared/types/index.ts';
import { reactive } from 'vue';
import type { CepValidation } from '@/modules/cep/types/CepValidation.ts';
import { useValidation } from '@/shared/composables/useValidation.ts';
import { cepSchema } from '../schemas/cep.schema.ts';
import type { SearchData } from '../types/SearchData.ts';

const {
    errors,
    validate
} = useValidation<CepValidation["data"]>(cepSchema)

const searchType = defineModel<SearchType>({
    default: "C"
})

const formData = reactive<CepValidation>({
    data: {
        cep: ''
    }
})

const emit = defineEmits<{
    "cep-search": [SearchData],
    "input-error": []
}>()


const search = () => {
    const validatedData = validate(formData)
    if (!validatedData) {
        emit("input-error")
        return
    }
    emit("cep-search", {
        searchType: "C",
        data: validatedData.data.cep
    })
}


</script>

<style></style>