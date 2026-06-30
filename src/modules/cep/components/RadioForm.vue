<template>
    <div class="form-radio">
        <fieldset class="conteiner-radio">
            <BaseRadio v-bind="radioConfig" v-model="searchType" />
        </fieldset>
    </div>
    
</template>

<script setup lang="ts">
import BaseRadio from '@/shared/components/BaseRadio/BaseRadio.vue';
import { radioConfig } from '../configs/RadioFormConfig';
import type { SearchType } from '@/shared/types';

const searchType = defineModel<SearchType>({
    default: "C"
})
</script>

<style scoped>
    .conteiner-radio {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .form-radio {
        margin-bottom: 1.5rem;
    }
</style>