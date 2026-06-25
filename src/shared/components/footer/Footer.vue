<template>
    <footer class="footer">
        <ExternalList :itens="contactFooterItens" />
    </footer>
</template>

<script setup lang="ts">
import { contactFooterItens } from '@/shared/configs/contacts.ts';
import ExternalList from '../ExternalList/ExternalList.vue';

</script>

<style scoped>
.footer {
    background-color: gray;
}
</style>