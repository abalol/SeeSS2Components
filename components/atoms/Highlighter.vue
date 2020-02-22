<template>
  <span class="marker"><slot></slot></span>
</template>
<style lang="scss" scoped>
.marker {
  font-weight: bold;
  font-size: 1.2em;
  background: linear-gradient(transparent 75%, #ffb5ad 75%);
  margin: 0 0.2em;
}
</style>
