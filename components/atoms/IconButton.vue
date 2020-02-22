<template>
  <nuxt-link :to="to" class="button">
    <div class="icon">
      <font-awesome-icon v-if="icon" :icon="icon" />
    </div>
    <div class="text">
      <slot></slot>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    disabled: Boolean,
    icon: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.button {
  display: inline-block;
  padding: 0.4em 1.6em;
  font-size: 0.8em;
  color: $MAIN_COLOR;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  border-radius: 3px;
  transition: 0.4s ease;
}
.text {
  display: block;
  margin: 0.2em;
}
.icon {
  font-size: 2em;
}
</style>
