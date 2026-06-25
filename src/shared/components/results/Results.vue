<template>
    <ul>
        <li v-for="item in props.itens" :key="item.id">
            <span>Rua: {{ item.street }}</span>
            <span>Cidade: {{ item.city }}</span>
            <span>Estado: {{ item.state }}</span>
            <span>Cep: {{ item.cep }}</span>
            <span>DDD: {{ item.DDD }}</span>
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { CepResultProps } from './CepResultsProps';


const props = defineProps<{
    itens: CepResultProps[]
}>()
</script>