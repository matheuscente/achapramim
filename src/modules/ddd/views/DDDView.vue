<template>
    <form @submit.prevent="handleSearch">

        <BaseForm
         v-bind="dddFormConfig" 
         v-model="formData.data.ddd" 
         :error="inputErrors.ddd" />

        <Loading v-if="loading"/>

        <DDDResult
        v-if="returnData && returnData.cities.length > 0 || errors" 
        :itens="returnData?.cities" :error="errors"
        :state="returnData?.state"
        />
    </form>
</template>

<script setup lang="ts">
import BaseForm from '@/shared/components/BaseForm/BaseForm.vue';
import { dddFormConfig } from '../configs/dddFormConfig';
import { reactive, watch } from 'vue';
import { useValidation } from '@/shared/composables/useValidation';
import { dddSchema } from '../schemas/ddd.schema';
import type { DDDValidation } from '../types/DddValidation';
import Results from '@/shared/components/results/Results.vue';
import { useDDD } from '../composables/useDDD';
import Loading from '@/shared/Loading/Loading.vue';
import DDDResult from '../components/DDDResult.vue';

const {
    errors: inputErrors,
    validate
} = useValidation<DDDValidation["data"]>(dddSchema)

const {
    errors,
    loading,
    clearData,
    clearErrors,
    returnData,
    search
} = useDDD()

const formData = reactive<DDDValidation>({
    data: {
        ddd: ""
    }
})

watch(inputErrors, () => {
    clearData(),
    clearErrors()
})

const handleSearch = async () => {
    const validatedDada = validate(formData)
    if (!validatedDada)  return
    
    await search(formData)
}
</script>