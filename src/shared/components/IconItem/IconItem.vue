<template>
    <a class="icon-item" :href="props.href" :target="props.target">
        <img :src="props.src" :alt="props.alt" :width="props.width" :height="props.height"
            :aria-label="props.ariaLabel">
    </a>
</template>

<script setup lang="ts">
import type { IconItemProps } from '@/shared/types/index';


const props = defineProps<IconItemProps>()
</script>

<style scoped>
.icon-item {
    width: 48px;
    height: 48px;
    display: inline-block;
}

.icon-item img:hover {
    transform: scale(1.1);
}

.icon-item img {
    transition: transform 0.2s ease;
    transform-origin: center;
    width: 100%;
    height: 100%;
}
</style>