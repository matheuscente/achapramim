<template>
    <form @submit.prevent="handleSearch">
        <BaseForm v-bind="dddFormConfig" v-model="formData.data.ddd" :error="errors.ddd" />
    </form>
</template>

<script setup lang="ts">
import BaseForm from '@/shared/components/BaseForm/BaseForm.vue';
import { dddFormConfig } from '../configs/dddFormConfig';
import { reactive, ref } from 'vue';
import { useValidation } from '@/shared/composables/useValidation';
import { dddSchema } from '../schemas/ddd.schema';
import type { DDDValidation } from '../types/DddValidation';

const {
    errors,
    validate
} = useValidation<DDDValidation["data"]>(dddSchema)

const formData = reactive<DDDValidation>({
    data: {
        ddd: ""
    }
})

const handleSearch = () => {
    const validatedDada = validate(formData)
    if (!validatedDada) return
}
</script>