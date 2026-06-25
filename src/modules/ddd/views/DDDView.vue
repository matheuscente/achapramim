<template>
    <form @submit.prevent="handleSearch">
        <BaseForm v-bind="dddFormConfig" v-model="formData" />
    </form>
</template>

<script setup lang="ts">
import BaseForm from '@/shared/components/BaseForm/BaseForm.vue';
import { dddFormConfig } from '../configs/dddFormConfig';
import { ref } from 'vue';

const formData = ref<string>("")

const handleSearch = () => {
    console.log(formData.value)
}
</script>