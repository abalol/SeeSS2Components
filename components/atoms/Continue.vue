<template>
  <nuxt-link :to="to" class="continue"><slot></slot></nuxt-link>
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
.continue {
  font-size: 14px;
  color: #666;
  text-decoration: none;
}

.continue::after {
  display: inline-block;
  width: 0.4em;
  height: 0.4em;
  margin: 0 0.2em 0.1em;
  content: '';
  border-right: 0.14em solid $ACCENT_COLOR;
  border-bottom: 0.14em solid $ACCENT_COLOR;
  transform: rotate(-45deg);
}

.continue:hover {
  opacity: 0.6;
}
</style>
