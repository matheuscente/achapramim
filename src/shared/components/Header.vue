<template>
    <header>
        <div>
            <RouterLink :to="logoProps.href">
                <img :src="logoProps.src" :alt="logoProps.alt" :width="logoProps.width" :height="logoProps.height">
            </RouterLink>
        </div>
        <nav>
            <ul>
                <MenuItem v-bind="headerProps.cep" />
                <MenuItem v-bind="headerProps.ddd" />
                <MenuItem v-bind="headerProps.about" />
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue';
import { headerProps, logoProps } from '../configs/header.ts';

</script>

<style scoped></style>