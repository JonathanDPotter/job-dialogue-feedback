<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

interface Iprops {
  title: string;
  description: string;
  mutation: string;
}

const store = useStore();
const router = useRouter();
const props = defineProps<Iprops>();

let { answer } = reactive({ answer: store.state[props.mutation] });

const back = () => store.commit("current", -1);

const saveAndContinue = () => {
  store.commit(props.mutation, answer);
  store.state.current !== 5
    ? store.commit("current", 1)
    : router.push("/preview");
};
</script>

<template>
  <div
    class="card vh-90 vw-100 text-bg-dark p-4 position-absolute top-0 left-0"
  >
    <div class="card-header">
      <h2 class="card-title">{{ props.title }}</h2>
    </div>
    <div class="card-body">
      <p>{{ props.description }}</p>
      <form>
        <input
          class="my-4"
          v-if="props.description === 'Team Member'"
          type="text"
          name="team-member"
          id="team-member"
          v-model="answer"
        />
        <textarea
          v-else
          class="w-100"
          name="answer"
          id="answer"
          cols="30"
          rows="10"
          v-model="answer"
        />
      </form>
      <div class="card-footer">
        <button
          v-if="props.description !== 'Team Member'"
          class="btn btn-secondary mx-4"
          type="button"
          @click="back"
        >
          Back
        </button>
        <button
          class="btn btn-secondary"
          type="button"
          @click="saveAndContinue"
        >
          Save and Continue
        </button>
      </div>
    </div>
  </div>
</template>
