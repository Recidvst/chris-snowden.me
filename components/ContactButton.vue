<template>
  <a
    href="https://github.com/Recidvst"
    title="Contact me"
    v-bind:class="['button cta-button text-glow', {'flicker' : this.flicker}]"
    @mouseover="hoverFlicker($event)"
  >Get In Touch</a>
</template>

<script>
// scripts
import { Scrambler } from "~/node_modules/scrambling-letters/dist/scramble.min.js";

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
      }, 1500);
    }
  }
};
</script>

<style>
</style>
