<template>
  <div id="app">
    <Navbar />
    <header class="obj-header">
      <div class="obj-container">
        <div class="obj-text">
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
      </div>
      <div class="obj-container">
        <img src="./assets/description.png" alt="" class="obj-image">
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.obj-header {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  width: 75%;
  margin: 5rem auto 0;
  .obj-container {
    display: flex;
    flex: 1 0 calc(100% / 2);
    align-items: center;
    justify-content: center;
    .obj-image {
      width: 100%;
    }
    .obj-text {
      font-family: 'Montserrat', sans-serif;
      position: relative;
      max-width: 75%;
      .obj-title {
        font-weight: 800;
      }
      .obj-paragraph {
        font-size: 1.1rem;
        margin: 2rem 0 0;
      }
      .obj-buttons {
        margin: 3rem 0 0;
        .obj-button {
          color: #e32f12;
          text-decoration: none;
          font-weight: 600;
          border: solid #e32f12 2px;
          padding: 0.5rem 2rem;
          transition: all 0.2s ease;
          &:hover {
            background-color: #e32f12;
            color: white;
          }
        }
      }
    }
  }
}
</style>

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