<template>
    <footer>
        <div>
            <IconItem v-bind="linkedinIconConfig" />
            <IconItem v-bind="githubIconConfig" />
        </div>
    </footer>
</template>

<script setup lang="ts">
import IconItem from './IconItem.vue';
import { linkedinIconConfig, githubIconConfig } from '../configs/footer.ts';
</script>

<style scoped></style>