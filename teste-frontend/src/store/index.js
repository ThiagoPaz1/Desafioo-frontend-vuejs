import { createStore } from "vuex";

export default createStore({
  state: {
    ceps: [],
  },
  mutations: {
    newCeps(state, value) {
      state.ceps = value;
    }
  }
});