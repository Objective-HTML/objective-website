<template>
  <footer class="obj-footer">
    <div class="obj-footer-container">
      <div class="obj-footer-item">
        <h1 class="obj-footer-title">
          OBJECTIVE
          <span class="obj-footer-subtitle">
            HTML
          </span>
        </h1>
      </div>
      <div class="obj-footer-item">
        <p class="obj-footer-paragraph">
          Objective HTML © 2020. All rights are reserved.
        </p>
      </div>
      <div class="obj-footer-item">
        <div class="obj-footer-text">
          <ul class="obj-footer-list">
            <li class="obj-footer-element">
              <router-link to="/" class="obj-footer-link">
                Home
              </router-link>
            </li>
            <li class="obj-footer-element">
              <router-link to="/documentation" class="obj-footer-link">
                Documentation
              </router-link>
            </li>
            <li class="obj-footer-element">
              <router-link to="/get-started" class="obj-footer-link">
                Get started
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.obj-footer {
  position: relative;
  padding: 5rem 0;
  background-color: #e32f12;
  &.footer-sticky {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .obj-footer-container {
    position: relative;
    width: 75%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    .obj-footer-item {
      display: flex;
      flex: 1 0;
      justify-content: center;
      align-items: center;
      font-family: 'Montserrat', sans-serif;
      @media (max-width: 1200px) {
        flex-basis: 100% !important;
        margin: 1rem 0;
      }
      .obj-footer-title {
        font-weight: 800;
        font-size: 2rem;
        color: white;
        .obj-footer-subtitle {
          display: block;
          font-size: 1.5rem;
          position: relative;
          top: -0.5rem;
          opacity: 0.8;
          font-weight: 700;
          @media (max-width: 1200px) {
            text-align: center;
          }
        }
      }
      .obj-footer-paragraph {
        color: white;
        @media (max-width: 1200px) {
          text-align: center;
        }
      }
      .obj-footer-list {
        list-style-type: none;
        .obj-footer-element {
          margin: 1rem 0;
          @media (max-width: 1200px) {
            text-align: center;
          }
          .obj-footer-link {
            color: #571309;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      &:nth-child(1) {
        flex-basis: 10%;
      }
      &:nth-child(2) {
        flex-basis: 60%;
      }
      &:nth-child(3) {
        flex-basis: 10%;
      }
    }
  }
}
</style>

<script>
export default {

}

</script>