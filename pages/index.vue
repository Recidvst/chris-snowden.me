<template>
  <section class="page-container">
    <div class="homepage-title-container">
      <h1 class="title">Chris Snowden</h1>
      <div>
        <h2>Front End Web Developer</h2>
        <h3>js | scss | vue | wordpress | ??</h3>
      </div>
    </div>
  </section>
</template>

<script>
// components
import Header from "~/components/Header";
import Footer from "~/components/Footer";
// scripts
import { Scrambler } from "~/node_modules/scrambling-letters/dist/scramble.min.js";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  beforeMount() {},
  mounted() {
    Scrambler({
      target: "h1",
      random: [1000, 20000],
      speed: 120
    });
  }
};
</script>

<style>
</style>
