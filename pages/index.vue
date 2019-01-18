<template>
  <section class="page-container">
    <div class="page-title-container">
      <h1 class="title">
        <span>Chris</span>
        <br>
        <span>Snowden</span>
      </h1>
      <div class="homepage-title-blurb">
        <h2>Front End Web Developer</h2>
        <h3>js | css | vue | node | wordpress | ???</h3>
      </div>
      <NeonButton url="/contact" text="Get In Touch" title="Get In Touch" tabindex="1"/>
    </div>
  </section>
</template>

<script>
// components
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import NeonButton from "~/components/NeonButton";
import NeonExternalButton from "~/components/NeonExternalButton";
// scripts
import { Scrambler } from "~/node_modules/scrambling-letters/dist/scramble.min.js";

export default {
  components: {
    Header,
    Footer,
    NeonButton,
    NeonExternalButton
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {
    let title = document.querySelector("h1");
    Scrambler({
      target: "h1 span",
      random: [1000, 1500],
      speed: 120
    });
    setTimeout(e => {
      title.classList.add("flicker-title");
    }, 1500);
  }
};
</script>

<style>
</style>
