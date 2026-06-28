<template>
    <form @submit.prevent="search">
        <div>
            <RadioForm v-model="searchType" />
        </div>
        <BaseInput v-for="field in formAddressConfig" :key="field.id" v-bind="field"
            v-model="formData.data[field.field]" :error="errors[field.field]" />
        <FormButtons />
    </form>
</template>

<script setup lang="ts">
import { formAddressConfig } from "@/modules/cep/configs/CepFormConfig"
import RadioForm from './RadioForm.vue';
import type { SearchType } from '@/shared/types/index.ts';
import BaseInput from '@/shared/components//BaseInput/BaseInput.vue';
import type { AddressValidation } from "@/modules/cep/types/AddressValidation.ts";
import { reactive } from "vue";
import FormButtons from "@/shared/components/FormButtons/FormButtons.vue";
import { useValidation } from "@/shared/composables/useValidation.ts";
import { addressSchema } from "../schemas/address.schema.ts";
import type { SearchData } from "../types/SearchData.ts";

const {
    errors,
    validate
} = useValidation<AddressValidation["data"]>(addressSchema)

const searchType = defineModel<SearchType>()
const formData = reactive<AddressValidation>({
    data: {
        street: "",
        city: "",
        state: ""

    }
})

const emit = defineEmits<{
    "address-search": [data: SearchData],
    "input-error": []

}>()

const search = () => {
    const validatedData = validate(formData)
    if (!validatedData) {
        emit("input-error")
        return
    }
    emit("address-search", {
        searchType: "A",
        data: validatedData.data
    })
}


</script>

<style></style>