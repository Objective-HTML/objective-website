<template>
  <div id="app">
    <Navbar />
    <header class="obj-header">
      <div class="obj-container">
        <h1 class="obj-title">
          A new easy way to start programming.
        </h1>
        <p class="obj-paragraph">
          Objective HTML is a simple language that have a HTML syntax like. It's easy to learn and easy to understand. 
        </p>
        <div class="obj-buttons">
          <router-link class="obj-button" to="/get-started">get started</router-link>
        </div>
      </div>
      <div class="obj-container">
        <img src="./assets/description.png" alt="" class="obj-image">
      </div>
    </header>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>