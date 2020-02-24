<template>
  <header class="header">
    <div class="header-inner">
      <h1 class="logo">
        Sample Header
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
.header {
  background-color: $MAIN_COLOR;
  box-sizing: border-box;
  width: 100%;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 0.8em;
  margin: 0 auto;
  font-size: 1.2em;
}

.logo {
  margin: 0;
  color: $BASE_COLOR;
}
</style>
