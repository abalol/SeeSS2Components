<template>
  <div class="card">
    <div class="content-img">
      <img :src="src" />
    </div>
    <div class="content">
      <h3 class="title">
        {{ title }}
      </h3>
      <div class="post-day">{{ content }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
img {
  max-width: 238px;
}

.card {
  position: relative;
  width: 15em;
  margin: 0 auto;
  cursor: pointer;
  border: 1px solid #e9eaea;
  border-radius: 3px;
  transition: 0.3s;
}
.card::before {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.4em;
  font-size: 1rem;
  color: $LIGHT_TEXT;
  content: 'NEW';
  background: $MAIN_COLOR;
}

.content-img {
  padding: 0.4em 0;
  text-align: center;
  background: #fff;
  border-bottom: 1px solid #e9eaea;
}

.content {
  padding: 0.4em 0;
}

.title {
  position: relative;
  padding: 0 0.3em;
  margin: 0;
  font-size: 0.8em;
  line-height: 1.5;
}

.post-day {
  text-align: left;
  margin: 0.4em;
  font-size: 0.6em;
  color: #777;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>
