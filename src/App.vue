<script setup lang="ts">
import Header from "@/components/Header.vue";
import "./style.scss";
</script>

<template>
  <div class="vh-100 text-bg-dark">
    <Header />
    <router-view />
  </div>
</template>
