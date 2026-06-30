<template>
    <ul class="conteiner">
        <li v-for="item in props.itens" :key="item.href">
            <IconItem v-bind="item" />
        </li>
    </ul>

</template>

<script setup lang="ts">
import IconItem from '@/shared/components/IconItem/IconItem.vue';
import type { ContactListConfig } from '@/shared/types';

const props = defineProps<{
    itens: ContactListConfig[]
}>()
</script>

<style scoped>
    .conteiner {
      display: flex;
      gap: 2rem;
      padding: 20px;
      width: fit-content;

    }
</style>