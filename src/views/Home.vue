<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";
import questions from "@/questions.json";
import Question from "@/components/Question.vue";

const store = useStore();

const current = computed(() => store.state.current);
</script>

<template>
  <div class="vw-100 position-relative">
    <TransitionGroup name="slide-fade">
      <Question
        v-if="current === 0"
        :title="questions[0].title"
        :description="questions[0].description"
        :mutation="questions[0].mutation"
      />
      <Question
        v-if="current === 1"
        :title="questions[1].title"
        :description="questions[1].description"
        :mutation="questions[1].mutation"
      />
      <Question
        v-if="current === 2"
        :title="questions[2].title"
        :description="questions[2].description"
        :mutation="questions[2].mutation"
      />
      <Question
        v-if="current === 3"
        :title="questions[3].title"
        :description="questions[3].description"
        :mutation="questions[3].mutation"
      />
      <Question
        v-if="current === 4"
        :title="questions[4].title"
        :description="questions[4].description"
        :mutation="questions[4].mutation"
      />
      <Question
        v-if="current === 5"
        :title="questions[5].title"
        :description="questions[5].description"
        :mutation="questions[5].mutation"
      />
    </TransitionGroup>
  </div>
</template>
