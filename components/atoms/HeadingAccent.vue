<template>
  <h2 class="heading">
    <slot></slot>
  </h2>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.heading {
  padding-left: 0.5em;
  font-size: 1.5em;
  color: $HEADING_TEXT;
  border-left: 4px solid $ACCENT_COLOR;
}
</style>
