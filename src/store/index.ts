import { createStore } from "vuex";

export default createStore({
  state: {
    teamMember: "",
    jobPerformance: "",
    communication: "",
    customerService: "",
    teamworkCooperation: "",
    bigWins: "",
    current: 0,
  },
  getters: {},
  mutations: {
    teamMember(state, payload) {
      state.teamMember = payload;
    },
    jobPerformance(state, payload) {
      state.jobPerformance = payload;
    },
    communication(state, payload) {
      state.communication = payload;
    },
    customerService(state, payload) {
      state.customerService = payload;
    },
    teamworkCooperation(state, payload) {
      state.teamworkCooperation = payload;
    },
    bigWins(state, payload) {
      state.bigWins = payload;
    },
    current(state, payload) {
      state.current += payload;
    },
  },
  actions: {},
  modules: {},
});
