<template>
    <CepForm 
    v-model="searchType" 
    v-if="searchType === 'C'" 
    @cep-search="handleSearch"
    @input-error="handleInputError" />

    <AddressForm 
    v-model="searchType" 
    v-else 
    @address-search="handleSearch" 
    @input-error="handleInputError" />

    <Loading v-if="loading" />

    <Results v-if="returnData.length > 0 || errors" 
    :itens="returnData" :error="errors" />
</template>

<script setup lang="ts">
import type { SearchType } from '@/shared/types/index.ts';
import CepForm from '../components/CepForm.vue';
import AddressForm from '../components/AddressForm.vue';
import { ref, watch } from 'vue';
import type {  SearchData } from '../types/types.ts';
import { useCep } from '../composables/useCep.ts';
import Results from '@/shared/components/results/Results.vue';
import Loading from '@/shared/Loading/Loading.vue';

const searchType = ref<SearchType>("C")

const { errors,
        clearErrors,
        returnData,
        loading,
        search,
        clearData
 } = useCep()


 watch(searchType, () => {
    clearErrors()
 })


const handleSearch = async (data: SearchData) => {
        await search(data)
}

const handleInputError = () => {    
    clearErrors()
    clearData()
}

</script>