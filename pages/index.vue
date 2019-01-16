<template>
  <section class="page-container">
    <div class="homepage-title-container">
      <h1 class="title">
        <span>Chris</span>
        <br>
        <span>Snowden</span>
      </h1>
      <div class="homepage-title-blurb">
        <h2>Front End Web Developer</h2>
        <h3>js | css | vue | node | wordpress | ???</h3>
      </div>
      <ContactButton/>
    </div>
  </section>
</template>

<script>
// components
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import ContactButton from "~/components/ContactButton";
// scripts
import { Scrambler } from "~/node_modules/scrambling-letters/dist/scramble.min.js";

export default {
  components: {
    Header,
    Footer,
    ContactButton
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  beforeMount() {},
  mounted() {
    // Scrambler({
    //   target: "h1 span",
    //   random: [1000, 8000],
    //   speed: 120
    // });
    Scrambler({
      target: "h2, h3",
      random: [2000, 12000],
      speed: 120
    });
  }
};
</script>

<style>
</style>
