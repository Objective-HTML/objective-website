<template>
    <div id="app">
        <section class="obj-section obj-error">
            <div class="obj-container">
                <div class="obj-item">
                    <div class="obj-text">
                        <span class="obj-subtitle">
                            error
                        </span>
                        <h1 class="obj-error-code">
                            404
                        </h1>
                    </div>
                </div>
                <div v-highlight class="obj-code obj-item">
                    <pre class="language-html"><code>
&lt;objective&gt;

  &lt;goto&gt;
    {{ URL }}
  &lt;/goto&gt;

  &lt;print&gt;
    Page not found!
  &lt;/print&gt;

&lt;/objective&gt;
                    </code></pre>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.obj-section {
    position: relative;
    padding: 6rem 0;
    &.obj-error {
        .obj-container {
            display: flex;
            flex-flow: row wrap;
            width: 75%;
            margin: 0 auto;
            .obj-item {
                display: flex;
                flex: 1 0 calc(100% / 3);
                align-items: center;
                justify-content: center;
                margin: 0 5rem;
                &.obj-code {
                    pre {
                        padding: 2.5rem 5rem 1rem 2.5rem;
                        width: 75%;
                    }
                }
                .obj-text {
                    font-family: 'Montserrat', sans-serif;
                    text-align: center;
                    text-transform: uppercase;
                    .obj-subtitle {
                        font-size: 2.5rem;
                        font-weight: 800;
                        opacity: 0.75;
                        color: #444444;
                    }
                    .obj-error-code {
                        font-weight: 200;
                        font-size: 10rem;
                        color: #222222;
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
    data: function () {
        return {
            URL: new URL(location.href).pathname
        }
    }
}
</script>