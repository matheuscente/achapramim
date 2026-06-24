<template>
    <fieldset>
        <BaseRadio v-bind="radioConfig" v-model="searchType" />
    </fieldset>
</template>

<script setup lang="ts">
import BaseRadio from '@/shared/components/BaseRadio.vue';
import { radioConfig } from '../configs/RadioFormConfig';
import type { SearchType } from '@/shared/types/types';

const searchType = defineModel<SearchType>({
    default: "C"
})
</script>

<style scoped></style>