<template>
    <button class="btn" @click="emit('action', $event)" :type="props.type" :disabled="props.disabled">
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

<style scoped>
.btn {
    background-color: var(--cor4);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    display: inline-block;
    color: var(--cor0);
    padding: 8px 50px;
    border: none;
    text-transform: uppercase;
    border-radius: 4px;
    width: fit-content;
    cursor: pointer;
    opacity: .9;
    transition: background-color .2s ease;

}

.btn:hover {
    background-color: var(--cor5);
}

@media (max-width: 400px) {
    .btn {
        width: 100%;
    }
}
</style>