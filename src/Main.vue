<template>
  <div id="app">
    <Loader />
    <router-view />
  </div>
</template>

<script>
import Loader from './components/Loader'
export default {
  components: {
    Loader
  },
  mounted: function () {
    document.body.style.overflow = 'hidden'
    this.$el.childNodes.forEach(child => {
      if (Array.from(child.childNodes).filter(x => Array.from(x.classList).includes('obj-loader')).length > 0) {
        setTimeout(() => {
          Array.from(child.childNodes).filter(x => Array.from(x.classList).includes('obj-loader'))[0].classList.add('obj-loader-finished')
          document.body.style.overflow = 'unset'
        }, 2000)
      }
    })
  }
}
</script>