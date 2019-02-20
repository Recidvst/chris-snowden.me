<template>
  <section class="page-container">
    <div class="page-title-container">
      <h1 class="title">Thanks very much!</h1>
      <h2>I'll get back to you asap</h2>
      <NeonButton url="/" text="Go back" title="Back to the homepage"/>
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
      random: [500, 1000],
      speed: 120
    });
    setTimeout(e => {
      title.classList.add("flicker-title");
    }, 1000);
  }
};
</script>

<style>
</style>
