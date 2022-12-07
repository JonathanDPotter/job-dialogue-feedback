<script setup lang="ts">
import { useStore } from "vuex";
import PreviewCard from "@/components/PreviewCard.vue";
import questions from "../questions.json";
import makeDoc from "@/utils/makeDoc";

const store = useStore();

const download = async () => {
  const prepDoc = questions.map((question) => {
    return {
      title: question.id === 1 ? question.description : question.title,
      answer: store.state[question.mutation],
    };
  });

  makeDoc(prepDoc);
};
</script>

<template>
  <div class="container p-4">
    <div v-for="question in questions" :key="question.id">
      <PreviewCard
        :title="question.id === 1 ? question.description : question.title"
        :answer="store.state[question.mutation]"
      />
    </div>
    <button class="btn btn-warning" @click="download">download</button>
  </div>
</template>
