<template>
  <section class="page-container">
    <div class="page-title-container">
      <!-- <h1 class="title">
        <span>Chris</span>
        <br>
        <span>Snowden</span>
      </h1> -->
      <!-- <NeonButton url="/contact" text="Get In Touch" title="Get In Touch" tabindex="1"/> -->
      <NeonButton url="/" text="Chris Snowden" title="" tabindex="1"/>
    </div>
  </section>
</template>

<script>
// components
import NeonButton from "~/components/NeonButton";
import NeonExternalButton from "~/components/NeonExternalButton";
// scripts
import { Scrambler } from "~/node_modules/scrambling-letters/dist/scramble.min.js";

export default {
  components: {
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
