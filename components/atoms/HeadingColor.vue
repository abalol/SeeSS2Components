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
  padding-bottom: 0.35em;
  border-bottom: 4px solid #ccc;
  color: $HEADING_TEXT;
}

.heading::before,
.heading::after {
  content: '';
  position: absolute;
  bottom: -4px;
  height: 4px;
}

.heading::before {
  left: 0;
  width: 50px;
  background-color: #2980b9;
}

.heading::after {
  left: 50px;
  width: 2px;
  background-color: $LIGHT_TEXT;
}
</style>
