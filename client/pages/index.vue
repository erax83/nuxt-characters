<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Home / Character Viewer
      </h1>
      <nuxt-link to="/characterCreator">Character Creator</nuxt-link>

      <p v-for="(character, index) in characters" v-bind:key="index">{{character.name}} is a {{character.profession}}!</p>
      <button v-on:click="getCharacters">Refresh Characters</button>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function () {
            return {
                characters: null
            }
        },
        methods: {
            getCharacters: function () {
                axios
                    .get('http://localhost:8080/characters')
                    .then(response => (this.characters = response.data))
            }
        },
        mounted: function () {
            this.getCharacters();
        }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
