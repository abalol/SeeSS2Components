<template>
  <div class="container">
    <div>
      <Heading>ボタン類</Heading>
      <Button icon="check">BUTTON</Button>
      <Button icon="check" disabled>BUTTON</Button><br />
      <LightButton icon="check">LIGHT BUTTON</LightButton>
      <LightButton icon="check" disabled>LIGHT BUTTON</LightButton><br />
      <RadiusButton>RADIUS BUTTON</RadiusButton>
      <RadiusButton disabled>RADIUS BUTTON</RadiusButton><br />
      <IconButton icon="home" to="/main">HOME</IconButton>

      <HeadingColor>テキスト類</HeadingColor>
      <Continue icon="home" to="/main">もっと見る</Continue><br /><br />
      <Tag icon="home">TAG</Tag><br /><br />
      <RadiusTag icon="home" to="/tag">角丸TAG</RadiusTag><br /><br />
      <IconText icon="home">ICON & TEXT</IconText><br /><br />
      強調したい時は<Highlighter>MARKER</Highlighter>を使おう<br /><br />

      <HeadingAccent>カード</HeadingAccent>
      <Card
        src="https://mandai-shop.jp/takasaki/wp-content/uploads/2018/03/sample.jpg"
        title="こゝろ"
        content="私はその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚かる遠慮というよりも、"
        >ICON & TEXT</Card
      ><br /><br />
    </div>
  </div>
</template>

<script>
import Heading from '@/components/atoms/Heading.vue'
import HeadingColor from '@/components/atoms/HeadingColor.vue'
import HeadingAccent from '@/components/atoms/HeadingAccent.vue'
import Continue from '@/components/atoms/Continue.vue'
import LightButton from '@/components/atoms/LightButton.vue'
import RadiusButton from '@/components/atoms/RadiusButton.vue'
import Button from '@/components/atoms/Button.vue'
import IconButton from '@/components/atoms/IconButton.vue'
import Tag from '@/components/atoms/Tag.vue'
import RadiusTag from '@/components/atoms/RadiusTag.vue'
import IconText from '@/components/atoms/IconText.vue'
import Highlighter from '@/components/atoms/Highlighter.vue'
import Card from '@/components/atoms/Card.vue'
export default {
  components: {
    RadiusButton,
    LightButton,
    Button,
    IconButton,
    Continue,
    Tag,
    IconText,
    Highlighter,
    RadiusTag,
    Card,
    Heading,
    HeadingColor,
    HeadingAccent
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
