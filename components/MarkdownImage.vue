<template>
  <figure>
    <img data-zoomable :alt="alt" :src="src" />
    <figcaption v-if="figcaption" class="text-center">{{ figcaption }}</figcaption>
  </figure>
</template>

<script>
import mediumZoom from 'medium-zoom'

export default {
  props: {
    alt: { type: String, default: '' },
    figcaption: { type: String, default: null },
    src: { type: String, default: null }
  },
  mounted() {
    mediumZoom('[data-zoomable]', {})
  }
}
</script>

<style>
.medium-zoom-overlay {
  background: #fff !important;
}

html.dark .medium-zoom-overlay {
  background: #555 !important;
}
</style>
