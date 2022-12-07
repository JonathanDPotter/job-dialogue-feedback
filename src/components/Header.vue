<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <header
    class="container-fluid d-flex px-4 text-bg-secondary align-items-center justify-content-around"
  >
    <div class="row">
      <div class="col">
        <h1>Job Dialog Feedback Form</h1>
      </div>
      <nav class="col d-flex justify-content-around align-items-center">
        <router-link v-if="route.path === '/'" to="/preview">
          <button class="btn btn-warning">Preview</button>
        </router-link>
        <router-link v-else to="/">
          <button class="btn btn-warning">Home</button>
        </router-link>
        <router-link to="/about"
          ><button class="btn btn-warning">About</button></router-link
        >
      </nav>
    </div>
  </header>
</template>
