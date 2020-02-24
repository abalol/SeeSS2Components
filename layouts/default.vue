<template>
  <div ontouchstart="">
    <Header />
    <Navigation />
    <nuxt />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Header,
    Navigation
  }
}
</script>
<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
body {
  background-color: $BASE_COLOR;
}
</style>
