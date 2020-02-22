<template>
  <div
    href="#!"
    :type="buttonType"
    :class="[disabled ? 'is-disabled' : 'radius-button']"
  >
    <font-awesome-icon v-if="icon" :icon="icon" />
    <slot></slot>
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
.is-disabled {
  display: inline-block;
  background-color: #eee;
  padding: 0.4em 1.6em;
  font-size: 0.8em;
  color: #ccc;
  text-decoration: none;
  user-select: none;
  border: 1px #ccc solid;
  border-radius: 20px;
  transition: 0.4s ease;
  margin: $BUTTON_MARGIN;
}
.radius-button {
  display: inline-block;
  padding: 0.4em 1.6em;
  font-size: 0.8rem;
  color: #00b5ad;
  text-decoration: none;
  user-select: none;
  border: 1px #00b5ad solid;
  border-radius: 20px;
  transition: 0.4s ease;
}
.radius-button:hover {
  color: #fff;
  background: #00b5ad;
}
</style>
