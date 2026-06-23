<template>
    <footer>
        <div>
            <IconItem v-bind="linkedinIconConfig" />
            <IconItem v-bind="githubIconConfig" />
        </div>
    </footer>
</template>

<script setup lang="ts">
import IconItem from '@/shared/components/IconItem.vue';
import { linkedinIconConfig, githubIconConfig } from '@/shared/components/footer/footer';
</script>

<style scoped></style>