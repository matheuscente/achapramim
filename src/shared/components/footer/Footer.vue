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
    background-color: var(--cor7);
    box-shadow: -3px -3px 1em var(--cor4);
    display: flex;
    justify-content: center;
    height: 88px;
    
    width: 100%;
}
</style>