<template>
  <header class="header">
    <div class="header-inner">
      <h1 class="logo">
        <p>See-SS 2 Components</p>
      </h1>
      <Menu />
    </div>
  </header>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  components: {
    Menu
  }
}
</script>

<style lang="scss" scoped>
.header {
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
  color: $MAIN_COLOR;
}
</style>
