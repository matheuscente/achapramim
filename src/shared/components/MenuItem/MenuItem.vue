<template>
    <li class="menu-item font-paragrafo">
        <RouterLink :to="props.to">

            {{ props.label }}

        </RouterLink>
    </li>
</template>

<script setup lang="ts">
import type { MenuItemProps } from '@/shared/types/index';

const props = defineProps<MenuItemProps>()
</script>


<style scoped>
.menu-item {
    cursor: pointer;
    text-transform: capitalize;
    padding: 20px;
}

.menu-item:hover {
    transform: scale(1.05, 1.05);
    transition: .3s;
    font-weight: bold;
}

@media(max-with: 900px) {
    .header-list:hover {
        transform: scale(1, 1);
    }


    .header-list {
        padding: 1rem 0;
        margin: 0 1rem;
        border-bottom: 2px solid rgba(0, 0, 0, .05);
        display: block;
        position: absolute;
        width: 100%;
        top: 70px;
        right: 0px;
        height: 0px;
        z-index: 99;
        transition: .6s;
        background-color: var(--cor0);
        visibility: hidden;
        overflow-y: hidden;
    }
}
</style>