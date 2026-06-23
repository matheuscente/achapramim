<template>
    <Header />
    <main>
        <RouterView />
    </main>
    <Footer />
</template>

<script setup lang="ts">
import Footer from '../components/Footer.vue';
import Header from '../components/header/Header.vue/index.js';

</script>

<style scoped></style>