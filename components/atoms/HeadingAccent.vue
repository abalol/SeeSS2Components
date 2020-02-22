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
  color: #333;
  border-left: 4px solid #00b5ad;
}
</style>
