<template>
    <div class="full-page">
            <Header />
    <main class="conteiner">
        <RouterView />
    </main>
    <Footer />

    </div>
</template>

<script setup lang="ts">
import Footer from '@/shared/components/footer/Footer.vue';
import Header from '@/shared/components/header/Header.vue';

</script>

<style scoped>
    .conteiner {
        max-width: 1200px;
    }

    .full-page {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
    }
</style>