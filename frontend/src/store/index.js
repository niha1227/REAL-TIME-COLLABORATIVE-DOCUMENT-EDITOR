import { createStore } from "vuex";

export default createStore({
  state: {
    documents: [],
  },
  mutations: {
    setDocuments(state, docs) {
      state.documents = docs;
    },
  },
  actions: {
    fetchDocuments({ commit }) {
      // Fetch from backend API
      commit("setDocuments", []);
    },
  },
});
