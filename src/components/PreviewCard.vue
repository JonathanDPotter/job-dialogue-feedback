<script setup lang="ts">
import { reactive } from "vue";

interface Iprops {
  title: string;
  answer: string;
}

const props = defineProps<Iprops>();

const { title, answer } = reactive(props);
</script>

<template>
  <div class="card my-4 border-warning">
    <div class="card-header text-bg-secondary">
      <p>{{ title }}</p>
    </div>
    <div class="card-body text-bg-light">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>
