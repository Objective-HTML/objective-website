<template>
  <div id="app">
    <header class="obj-header">
      <div class="obj-wrapper">
        <div class="obj-container">
          <div class="obj-text">
            <h1 class="obj-title">
              Objective HTML
            </h1>
            <p class="obj-paragraph">
              is an <strong>easy-to-use</strong> and <strong>intuitive</strong> programming language. It is open source and constantly updated.
            </p>
            <div class="obj-buttons">
              <router-link class="obj-button" to="/get-started">get started</router-link>
              <router-link class="obj-button" to="/get-started">download</router-link>
            </div>
          </div>
        </div>
        <div class="obj-container">
          <div v-highlight class="obj-code">
            <pre class="language-html"><code>
&lt;objective&gt;
  &lt;!-- Objective HTML is a simple language --&gt;

  &lt;define name=username&gt;
    world
  &lt;/define&gt;

  &lt;print&gt;
    Hello {username}!
  &lt;/print&gt;

&lt;/objective&gt;
            </code></pre>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.obj-header {
  position: relative;
  height: 500px;
  display: flex;
  flex-flow: row wrap;
  .obj-wrapper {
    display: flex;
    flex: 1 0;
    align-items: center;
    justify-content: center;
    .obj-container {
      margin: 0 5rem;
      .obj-code {
        pre {
          padding: 1rem 2rem 0.5rem;
          code {
          }
        }
      }
      .obj-text {
        font-family: 'Montserrat', sans-serif;
        .obj-title {
          font-weight: 300;
          font-size: 3rem;
          text-transform: uppercase;
          margin: 0 0 1rem 0;
        }
        .obj-paragraph {
          width: 425px;
        }
        .obj-buttons {
          margin: 2rem auto 0;
          text-align: center;
          display: flex;
          flex-flow: row wrap;
          .obj-button {
            margin: 0 1rem;
            border: solid 2px;
            font-weight: 600;
            padding: 0.5rem 2rem;
            text-decoration: none;
            text-transform: uppercase;
            position: relative;
            top: 0;
            transition: top 0.1s ease;
            &:hover {
              top: -2px;
            }
            &:nth-child(1) {
              border-color: #e32f12;
              color: #e32f12;
              margin: 0 1rem 0 0;
            }
            &:nth-child(2) {
              border-color: #e32f12;
              color: white;
              background: #e32f12;
            }
          }
        }
      }
    }
  }
}
</style>

<script>
import 'vue-code-highlight/themes/prism-okaidia.css'
import 'vue-code-highlight/themes/window.css'

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>