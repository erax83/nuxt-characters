import axios from "axios";

export const state = () => ({
  characters: null
});

export const mutations = {
  getCharacters(state, result) {
    state.characters = result;
  },
  addCharacter(state, value) {
    merge(state.list, value);
  }
};

export const actions = {
  async getFromDb({ commit }) {
    await this.$axios
      .get("http://localhost:8080/characters")
      .then(response => commit("getCharacters", response.data));
  },
  async addToDb(context, [one, two]) {
    await this.$axios.post("http://localhost:8080/characters", {
      name: one,
      profession: two
    });
  }
};
