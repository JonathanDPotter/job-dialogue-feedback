<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <header
    class="container-fluid d-flex px-4 text-bg-secondary vh-10 align-items-center justify-content-around"
  >
    <h1>Job Dialog Feedback Form</h1>
    <div>
      <router-link v-if="route.path === '/'" to="/preview">
        <button class="btn btn-warning">Preview</button>
      </router-link>
      <router-link v-else to="/">
        <button class="btn btn-warning">Home</button>
      </router-link>
    </div>
  </header>
</template>
