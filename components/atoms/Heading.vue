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
  position: relative;
  font-size: 1.5em;
  color: #333;
  text-align: center;
}

.heading::before,
.heading::after {
  position: absolute;
  top: 50%;
  display: inline-block;
  width: 10%;
  content: '';
  border-top: 3px solid #333;
}

.heading::before {
  left: 0;
}

.heading::after {
  right: 0;
}
</style>
