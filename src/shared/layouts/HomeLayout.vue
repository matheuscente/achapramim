<template>
    <Header />
    <main>
        <RouterView />
    </main>
    <Footer />
</template>

<script setup lang="ts">
import Footer from '@/shared/components/footer/Footer.vue';
import Header from '@/shared/components/header/Header.vue';

</script>

<style scoped></style>