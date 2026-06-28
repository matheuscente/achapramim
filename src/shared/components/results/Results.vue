<template>
    <div>
        <h1>resultados</h1>
        <ul v-if="!error">
            <li v-for="(item, index) in props.itens" :key="index">
                <div v-for="(value, key) in item" :key="String(key)">
                    <span v-if="value">{{ key }}: {{ value }}</span>
                </div>
            </li>
        </ul>
        <span v-else>
            {{ error }}
        </span>
    </div>
</template>

<script setup lang="ts" generic="T extends Record<string, unknown>">


const props = defineProps<{
    itens: T[],
    error: string | null | undefined
}>()

</script>