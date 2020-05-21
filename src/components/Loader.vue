<style lang="scss" scoped>
.obj-loader {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #e32f12;
  z-index: 10;
  opacity: 1;
  transition: all 0.5s ease;
  &.obj-loader-finished {
    opacity: 0;
    pointer-events: none;
    .obj-logo {
      width: 0;
    }
  }
  .obj-container {
    .obj-logo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: logo-loader ease-in-out 2.5s infinite;
      @media (max-width: 640px) {
        width: 100%;
      }
    }
  }
}

@keyframes logo-loader {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

<template>
  <div id="loader">
    <div class="obj-loader">
      <span class="obj-container">
        <img src="../assets/loader.webp" alt="" class="obj-logo">
      </span>
    </div>
  </div>
</template>

<script>