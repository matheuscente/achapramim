<template>
    <CepForm v-model="searchType" v-if="searchType === 'C'" @cep-search="handleSearch" />
    <AddressForm v-model="searchType" v-else @address-search="handleSearch" />
</template>

<script setup lang="ts">
import type { SearchType } from '@/shared/types/types.ts';
import CepForm from '../components/CepForm.vue';
import AddressForm from '../components/AddressForm.vue';
import { ref } from 'vue';
import type { AddressValidation } from '../types/types.ts';

const searchType = ref<SearchType>("C")


const handleSearch = (data: string | AddressValidation) => {
    console.log(data)
}

</script>