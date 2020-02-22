<template>
  <nuxt-link :to="to" class="text">
    <slot></slot>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.text {
  padding: 0.1em 0.5em;
  font-size: 0.8em;
  color: #fff;
  background: #333;
  border-radius: 4px;
  text-decoration: none;
}
</style>
