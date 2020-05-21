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
            Objective HTML is a simple language that have a HTML like syntax. It's easy to learn and easy to understand. 
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

    <section class="obj-gallery">
      <div class="obj-row">
        <div class="obj-container">
          <div class="obj-text">
            <h1 class="obj-title">
              Easy to code
            </h1>
            <p class="obj-paragraph">
              Objective HTML is a simple language to remember both in its syntax and its use. In addition to being simple to use, it has a rather pleasant and intuitive syntax.
            </p>
          </div>
        </div>
        <div class="obj-container">
          <div v-highlight class="obj-code">
            <pre class="language-html"><code>
&lt;objective&gt;

  &lt;print&gt;
    Hello world!
  &lt;/print&gt;

&lt;/objective&gt;
            </code></pre>
          </div>
        </div>
      </div>
      <div class="obj-row">
        <div class="obj-container">
          <div v-highlight class="obj-code">
            <pre class="language-html"><code>
&lt;objective&gt;
  
  &lt;define name=number&gt;
    5
  &lt;/define&gt;

  &lt;if {number} higher than {0}&gt;
    &lt;print&gt;
      {number} is higher than 0!
    &lt;/print&gt;
  &lt;/if&gt;

&lt;/objective&gt;
            </code></pre>
          </div>
        </div>
        <div class="obj-container">
          <div class="obj-text">
            <h1 class="obj-title">
              Easy to learn
            </h1>
            <p class="obj-paragraph">
              Objective HTML is an intuitive language with impressive simplicity. No real knowledge is necessary to learn how it works. 
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.obj-gallery {
  position: relative;
  margin: 3rem auto 0;
  width: 75%;
  display: flex;
  flex-flow: row wrap;
  .obj-row {
    margin: 2rem 0;
    display: flex;
    flex: 1 0 100%;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    .obj-container {
      display: flex;
      flex: 1 0 calc(100% / 2);
      align-items: center;
      justify-content: center;
      @media (max-width: 1100px) {
        flex-basis: 100% !important;
        margin: 2rem 0;
        text-align: center;
      }
      .obj-text {
        width: 50%;
        margin: 0 auto;
        font-family: 'Montserrat', sans-serif;
        .obj-title {
          text-transform: uppercase;
          color: #333333;
          position: relative;
          margin: 0 0 2rem 0;
          width: fit-content;
          @media (max-width: 1100px) {
            text-align: center;
            margin: 0 auto 2rem;
          }
          &::after {
            position: absolute;
            content: '';
            bottom: -0.4rem;
            left: 0;
            width: 50px;
            height: 3px;
            background-color: #333333;
            transition: all 0.5s ease;
            @media (max-width: 1100px) {
              left: 50%;
              transform: translateX(-50%);
            }
          }
          &:hover {
            &::after {
              animation: title-animation 0.5s ease forwards;
              @media (max-width: 1100px) {
                animation: none;
                
              }
            }
          }
        }
      }
      .obj-code {
        width: 100%;
        pre {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
          position: relative;
          top: 0;
          transition: all 0.5s ease;
          padding: 0 2rem;
          min-width: 50%;
          margin: 0 auto;
          &:hover {
            top: -5px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
  }
}
@keyframes title-animation {
  from {
    left: 0;
    width: 50px;
  }
  25% {
    left: 0;
    width: 100px;
  }
  50% {
    left: calc(100% - 50px);
    width: 50px;
  }
  75% {
    left: 0;
    width: 100%;
  }
  to {
    left: 0;
    width: 50px;
  }
}
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
          width: 200px;
          text-align: center;
          display: block;
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
import Footer from './components/Footer'
import 'vue-code-highlight/themes/prism-okaidia.css'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>