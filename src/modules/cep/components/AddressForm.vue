<template>
    <form @submit.prevent="search">
        <div>
            <RadioForm v-model="searchType" />
        </div>
        <BaseInput v-for="field in formAddressConfig" :key="field.id" v-bind="field" v-model="formData[field.field]" />
        <FormButtons />
    </form>
</template>

<script setup lang="ts">
import { formAddressConfig } from "@/modules/cep/configs/CepFormConfig"
import RadioForm from './RadioForm.vue';
import type { SearchType } from '@/shared/types/types.ts';
import BaseInput from '@/shared/components/BaseInput.vue';
import type { AddressValidation } from "@/modules/cep/types/AddressValidation.ts";
import { reactive } from "vue";
import FormButtons from "@/shared/components/FormButtons.vue";

const searchType = defineModel<SearchType>()
const formData = reactive<AddressValidation>({
    street: "",
    city: "",
    state: ""
})

const emit = defineEmits<{
    addressSearch: [address: AddressValidation]

}>()

const search = () => {
    emit("addressSearch", formData)
}


</script>

<style></style>