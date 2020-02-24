<template>
  <div :type="buttonType" :class="[disabled ? 'is-disabled' : 'radius-button']">
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
  background-color: $DISABLED_BACKGROUND;
  padding: 0.4em 1.6em;
  font-size: 0.8em;
  color: $DISABLED_TEXT;
  text-decoration: none;
  user-select: none;
  border: 1px #ccc solid;
  border-radius: 20px;
  transition: 0.4s ease;
  margin: $BUTTON_MARGIN;
  line-height: 1.7em;
}
.radius-button {
  display: inline-block;
  padding: 0.4em 1.6em;
  font-size: 0.8rem;
  color: $MAIN_COLOR;
  text-decoration: none;
  user-select: none;
  border: 1px $MAIN_COLOR solid;
  border-radius: 20px;
  transition: 0.4s ease;
  line-height: 1.7em;
}
.radius-button:hover {
  color: $LIGHT_TEXT;
  background: $MAIN_COLOR;
}
</style>
