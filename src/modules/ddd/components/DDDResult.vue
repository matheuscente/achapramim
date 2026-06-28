<template>
    <div>
        <div v-if="!error">
            <span>Estado: {{ props.state }}</span>
        </div>
        <h3>cidades</h3>
        <ul v-if="!error">
            <li v-for="(item, index) in props.itens" :key="index">
                    <span>{{ item }}</span>
            </li>
        </ul>
        <span v-else>
            {{ error }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { nanoid } from 'zod';



const props = defineProps<{
    state?: string | null,
    itens?: string[] | null,
    error?: string | null | undefined
}>()

</script>