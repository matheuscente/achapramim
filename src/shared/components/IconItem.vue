<template>
    <a :href="props.href" :target="props.target">
        <img :src="props.src" :alt="props.alt" :width="props.width" :height="props.height"
            :aria-label="props.ariaLabel">
    </a>
</template>

<script setup lang="ts">
import type { IconItemProps } from '../types/types';


const props = defineProps<IconItemProps>()
</script>

<style scoped></style>