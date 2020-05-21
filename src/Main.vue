<template>
  <div id="app">
    <Loader />
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  components: {
    Loader,
    Navbar,
    Footer
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