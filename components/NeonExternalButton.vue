<template>
  <a
    v-bind:href="this.url"
    v-bind:title="this.title"
    v-bind:class="['button cta-button text-glow', {'flicker' : this.flicker}]"
    @mouseover="hoverFlicker($event)"
    target="_blank"
    role="button"
  >{{this.text}}</a>
</template>

<script>
export default {
  data() {
    return {
      flicker: false
    };
  },
  methods: {
    hoverFlicker(e) {
      this.flicker = true;
      setTimeout(e => {
        this.flicker = false;
      }, 8100);
    }
  },
  props: {
    url: String,
    text: String,
    title: String
  }
};
</script>
