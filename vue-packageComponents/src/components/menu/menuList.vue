<script setup lang="ts">
import { useMenu } from "./menuList";
const { menus } = useMenu();
</script>
<template>
  <div v-for="(menuItem, i) in menus" :key="i">
    <div class="title">{{ menuItem.name }}</div>
    <a v-for="menu in menuItem" :key="menu.key">{{ menu.name }}</a>
  </div>
</template>
<style scoped></style>
