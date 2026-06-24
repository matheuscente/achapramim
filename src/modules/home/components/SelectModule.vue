<template>
    <div>
        <h1>
            <slot name="title"></slot>
        </h1>
        <p>
            <slot name="description"></slot>
        </p>
        <BaseButton @action="handleAction" :type="props.button">USAR</BaseButton>
    </div>
</template>

<script setup lang="ts">

import BaseButton from '@/shared/components/BaseButton.vue';
import { goPage } from '@/shared/utils/goPage';
import type { SelectModuleProps } from '@/modules/home/types/types';

const props = defineProps<SelectModuleProps>()

const handleAction = () => goPage(props.routeName)


</script>