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
        <div v-highlight class="obj-code">
          <pre class="language-html"><code>
&lt;objective&gt;
  &lt;!-- Objective HTML is a simple language --&gt;

  &lt;define name=username&gt;
    User
  &lt;/define&gt;

  &lt;print&gt;
    Hello {username}!
  &lt;/print&gt;

&lt;/objective&gt;
          </code></pre>
        </div>
      </div>
    </header>
    <section class="obj-install">
      <div class="obj-container">
        <div v-highlight class="obj-code">
          <pre class="language-bash"><code>npm i objective-cli -g</code></pre>
        </div>
      </div>
      <div class="obj-container">
        <div class="obj-text">
          <span>O</span>
          <span>B</span>
          <span>J</span>
          <span>E</span>
          <span>C</span>
          <span>T</span>
          <span>I</span>
          <span>V</span>
          <span>E</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>

.obj-install {
  margin: 5rem 0 0;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  .obj-container {
    display: flex;
    flex: 1 0 100%;
    justify-content: center;
    .obj-code {
      position: relative;
      bottom: -3.5rem;
      width: 100%;
      pre {
        width: 25%;
        height: 5rem;
        margin: 0 auto;
        text-align: center;
        @media (max-width: 768px) {
          width: 80%;
          padding: 1rem;
          overflow-x: scroll;
        }
      }
    }
    &:nth-child(2) {
      z-index: 1;
      background: white;
      height: 10rem;
      display: flex;
      flex-flow: row wrap;
      .obj-text {
        display: flex;
        flex-flow: row wrap;
        span {
          display: flex;
          flex: 1 0;
          justify-content: center;
          align-items: center;
          margin: 0 2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 3rem;
          text-align: center;
          opacity: 0.5;
          color: #dddddd;
          @media (max-width: 960px) {
            font-size: 1.5rem;
            margin: 0 1rem;
          }
          @media (max-width: 768px) {
            font-size: 1.5rem;
            margin: 0;
          }
        }
      }
    }
  }
}

.obj-header {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  width: 75%;
  margin: 5rem auto 0;
  @media (max-width: 768px) {
    width: 95%;
  }
  .obj-container {
    display: flex;
    flex: 1 0 calc(100% / 2);
    align-items: center;
    justify-content: center;
    .obj-code {
      margin: 3rem 0 0;
      @media (max-width: 768px) {
        width: 85vw;
      }
      pre { 
        padding: 0 5rem 0 2rem;
        @media (max-width: 768px) {
          max-width: 100vw;
          padding: 0 1rem;
          overflow-x: scroll;
        }
        code {
          overflow: scroll;
        }
      }
    }
    .obj-text {
      font-family: 'Montserrat', sans-serif;
      position: relative;
      max-width: 75%;
      .obj-title {
        font-weight: 800;
        @media (max-width: 480px) {
          font-size: 1rem;
        }
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
import 'vue-code-highlight/themes/prism-okaidia.css'
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