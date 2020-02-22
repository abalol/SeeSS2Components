<template>
  <div class="wrapper">
    <font-awesome-icon v-if="icon" :icon="icon" />
    <span class="text">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  display: inline-block;
}
.text {
  font-size: 1em;
  color: #222;
}
.icon {
  font-size: 1em;
}
</style>
