

<template>
  <svg :class="format+' title'" ref="svg">
    <defs>
      <text y="1em" :id="`title${id}-svg`" class="title-text"><slot/></text>
      <mask :id="`title${id}-mask`">
        <use :href="`#title${id}-svg`" fill="white"></use>
      </mask>
    </defs>
    <image href="/src/assets/images/titleTexture.jpg" :mask="`url(#title${id}-mask)`" ref="image" width="100%" height="100%" preserveAspectRatio="xMidYMin slice"/>
    <use :href="`#title${id}-svg`" class="border-main" ref="text" />
  </svg>
</template>

<script lang="ts">
export default {
  props: {
    textSize: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    format: {
      type: String,
    } 
  },
  data() {
    return {
      textSizePx: `${this.textSize}px`
    }
  },
  mounted() {
    const text = this.$refs.text;
    const svg = this.$refs.svg;
    if (text instanceof SVGUseElement && svg instanceof SVGElement) {
      const svgWidth = `${text.getBBox().width / this.textSize}em`;
      svg.setAttribute("width", svgWidth)
    }
  }
}
</script>

<style>
.title {
  font: v-bind(textSizePx) AspireSC;
  transform:scale(0.9,1.25);
  position: relative;
  height: 1.25em;
  margin-top: 0.12em;
}

.main {
  filter: drop-shadow(0.1em 0.1em rgb(66, 28, 9));
}

.yellow {
  margin-top: -0.12em;
  margin-left: -0.15em;
  margin-right: -0.15em;
  filter: hue-rotate(12deg) saturate(180%) drop-shadow(0.1em 0.1em rgb(103, 46, 5));
}

.green {
  margin-top: -0.12em;
  margin-left: -0.10em;
  margin-right: -0.10em;
  filter: hue-rotate(60deg) saturate(180%) drop-shadow(0.1em 0.1em rgb(3, 67, 34));
}

.blue {
  margin-top: -0.12em;
  margin-left: -0.10em;
  margin-right: -0.10yem;
  filter: hue-rotate(180deg) saturate(180%) drop-shadow(0.1em 0.1em rgb(11, 44, 115));
}

.border-main {
  stroke: rgb(110, 62, 25); 
  stroke-width: 0.05em;
  fill: transparent;
}

@media screen and (max-width: 860px) {
  .title {
    font-size: 5.2326vw;
  }
}

</style>