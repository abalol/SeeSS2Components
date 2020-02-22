<template>
  <div>
    <div class="header-wrap">
      <ul class="header-nav relative">
        <label class="menu">
          <input id="menu" type="checkbox" value="off" />
          <label class="menu-1" for="menu"></label>
          <label class="menu-2" for="menu"></label>
          <label class="menu-3" for="menu"></label>
        </label>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    disabled: Boolean,
    icon: {
      type: String,
      default: ''
    },
    buttonType: {
      type: String,
      default: 'button'
    }
  }
}
</script>
<style lang="scss" scoped>
#menu {
  display: none;
}

.menu {
  display: block;
  width: 40px;
  font-size: 0;
}

.menu-1,
.menu-2,
.menu-3 {
  box-sizing: border-box;
  display: inline-block;
  width: 40px;
  height: 4px;
  margin: 4px 0;
  background-color: $TEXT_COLOR;
  border-radius: 4px;
  transition: all 0.4s;
  z-index: 999;
}

#menu:checked ~ .menu-1 {
  transform: translateY(12px) rotate(-45deg);
}

#menu:checked ~ .menu-2 {
  opacity: 0;
}

#menu:checked ~ .menu-3 {
  transform: translateY(-12px) rotate(45deg);
}
.header-wrap {
  display: flex;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.header-nav {
  display: flex;
  align-items: center;
  margin: 0 auto;
  list-style: none;
}

.header-avatar {
  width: 3em;
  height: 3em;
  cursor: pointer;
  border-radius: 1.5em;
}

.header-dropdown {
  top: 0px;
  right: 0;
  z-index: 998;
  width: 200px;
  padding: 0.2em 0;
  font-size: 14px;
  background: #fff;
  border-radius: 0.5em;
  box-shadow: 0 0 9px 2px #e0e0e0;
}

.btm-border {
  padding-bottom: 0.2em;
  margin-bottom: 0.2em;
  border-bottom: solid 0.1em #eee;
}

.one-line {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.header-dropdown .dropdown-wrap {
  padding: 0.8em 1.4em;
  cursor: pointer;
}

.dropdown-wrap:hover {
  background: #eee;
}

.header-dropdown a {
  display: block;
  text-decoration: none;
}
</style>
