<template>
    <button @click="emit('action', $event)" :type="props.type" :disabled="props.disabled">
        <slot></slot>
    </button>

</template>

<script setup lang="ts">
import type { BaseButtonProps } from '@/shared/types/index';

const emit = defineEmits<{
    action: [event: MouseEvent]
}>()

const props = defineProps<BaseButtonProps>()

</script>

<style></style>