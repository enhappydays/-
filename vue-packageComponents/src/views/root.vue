<script setup lang="ts">
import { ref } from "vue";
const msg = ref("首页");
</script>
<template>
  <div class="app">
    <RouterView />
  </div>
  <div>{{ msg }}</div>
</template>
<style scoped></style>
