<template>
  <div class="loading-container">
    <div class="spinner"></div>
    <span class="loading-text">Carregando...</span>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.9);
  z-index: 9999;
}

.spinner {
  width: 50px;
  height: 50px;

  border: 5px solid #e5e7eb;
  border-top: 5px solid #3b82f6;

  border-radius: 50%;

  animation: spin 0.8s linear infinite;
}

.loading-text {
  margin-top: 16px;
  font-size: 18px;
  font-weight: 500;
  color: #555;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>