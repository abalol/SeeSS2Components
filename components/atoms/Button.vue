<template>
  <div
    href="#!"
    :type="buttonType"
    :class="[{ 'is-disabled': disabled, button: !disabled }]"
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
  background-color: $DISABLED_BACKGROUND;
  padding: 0.4em 1.6em;
  font-size: 0.8em;
  color: $DISABLED_TEXT;
  text-decoration: none;
  user-select: none;
  border: 1px #ccc solid;
  border-radius: 3px;
  transition: 0.4s ease;
  margin: $BUTTON_MARGIN;
}
.button {
  display: inline-block;
  padding: 0.4em 1.6em;
  font-size: 0.8em;
  color: $LIGHT_TEXT;
  text-decoration: none;
  user-select: none;
  background: $MAIN_COLOR;
  border: 1px $MAIN_COLOR solid;
  border-radius: 3px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  transition: 0.2s ease;
  margin: $BUTTON_MARGIN;
}
.button:hover {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
}
</style>
