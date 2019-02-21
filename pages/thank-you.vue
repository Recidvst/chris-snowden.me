<template>
  <section class="page-container">
    <div class="page-title-container">
      <h1 class="title neon-title">Thank you!</h1>
      <nuxt-link class="button button-simple" to="/" title="Homepage">Back to the homepage</nuxt-link>
    </div>
  </section>
</template>

<script>
// components
import NeonButton from "~/components/NeonButton";
// scripts
import { Scrambler } from "~/node_modules/scrambling-letters/dist/scramble.min.js";

export default {
  components: {
    NeonButton
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {
    let title = document.querySelector("h1");
    Scrambler({
      target: "h1",
      random: [1750, 3000],
      speed: 100
    });
    // fire the flicker as soon as scramble finishes
    setTimeout(e => {
      this.flicker = true;
      setTimeout(e => {
        this.flicker = false;
      }, 810);
    }, 3500);
    // fire the flicker every 20 secs as a reminder
    setInterval(e => {
      this.flicker = true;
      setTimeout(e => {
        this.flicker = false;
      }, 810);
    }, 20000);   
  }
};
</script>

<style>
</style>
