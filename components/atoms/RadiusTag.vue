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
  display: inline-block;
  padding: 0.4em 0.8em;
  font-size: 0.8em;
  color: #555;
  text-decoration: none;
  user-select: none;
  border: 1px solid #aaa;
  border-radius: 20px;
}
</style>
