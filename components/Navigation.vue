<template>
  <nav class="nav-horizontal">
    <div class="mask">
      <ul class="list">
        <li><font-awesome-icon icon="apple-alt" /><br />Apple</li>
        <li><font-awesome-icon icon="check" /><br />Check</li>
        <li><font-awesome-icon icon="mobile" /><br />Mobile</li>
        <li><font-awesome-icon icon="desktop" /><br />Desktop</li>
        <li><font-awesome-icon icon="laptop" /><br />Laptop</li>
        <li><font-awesome-icon icon="mobile" /><br />Mobile</li>
        <li><font-awesome-icon icon="desktop" /><br />Desktop</li>
        <li><font-awesome-icon icon="laptop" /><br />Laptop</li>
        <li><font-awesome-icon icon="mobile" /><br />Mobile</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
.nav-horizontal {
  width: 100%;
  overflow: hidden;
  background: $MAIN_COLOR;
  position: sticky;
  top: 0px;
  z-index: 100;
  padding-top: 0.4em;
  height: 4em;
}
.mask {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.list {
  display: inline-table;
  max-width: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
}
.list li {
  display: table-cell;
  white-space: nowrap;
  font-size: 80%;
  text-decoration: none;
  color: #fff;
  font-size: 1.2em;
  padding: 0.4em;
}
::-webkit-scrollbar {
  display: none;
}
.list li a i {
  font-size: 100%;
}
</style>
