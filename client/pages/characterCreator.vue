<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Character Creator</h1>
      <nuxt-link to="/">Home / Character Viewer</nuxt-link>

      <div>
        <label for="character-name">Character Name:</label>
        <input type="text" id="character-name" v-model="name" placeholder="Enter a name" />
        <br />
        <br />
        <label for="professions-list">Character Profession:</label>
        <select id="professions-list" v-model="profession">
          <option value="Mage">Mage</option>
          <option value="Thief">Thief</option>
          <option value="Warrior">Warrior</option>
        </select>
        <button v-on:click="postCharacter">Create Character</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CharacterCreator",
  data: function () {
    return {
      name: null,
      profession: null,
    };
  },
  methods: {
    postCharacter() {
      this.$store.dispatch("storeIndex/addToDb", [this.name, this.profession]);
    },
  },
};
</script>

<style>
</style>