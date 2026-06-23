<template>
    <button @click="emit('action', $event)"
    :type="props.type"
    :disabled="props.disabled"
    >
        <slot></slot>
    </button>

</template>

<script setup lang="ts">
import type { BtnProps } from '@/shared/types/types';

    const emit = defineEmits<{
        action: [event: MouseEvent]
    }>()

    const props = defineProps<BtnProps>()
    
</script>

<style></style>