<template>
    <li>
        <RouterLink :to="props.to">

            {{ props.label }}

        </RouterLink>
    </li>
</template>

<script setup lang="ts">
import type { MenuItemProps } from '@/shared/types/index';

const props = defineProps<MenuItemProps>()
</script>


<style scoped></style>