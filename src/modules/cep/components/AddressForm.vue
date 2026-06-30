<template>
    <form @submit.prevent="search" class="address-form">
        <RadioForm class="radio-address-form" v-model="searchType" />
        <div class="input-conteiner">
            <BaseInput class="address-form-input" v-for="field in formAddressConfig" :key="field.id" v-bind="field"
                v-model="formData.data[field.field]" :error="errors[field.field]" />
        </div>

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

<style scoped>
.address-form-input {
    flex: 1;
}

.address-form {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem;
    flex-direction: column;
}

.radio-address-form {
    margin-bottom: 0px;
}

.input-conteiner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}


</style>