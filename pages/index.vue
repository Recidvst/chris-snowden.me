<template>
  <section class="page-container">
    <div class="page-title-container">
      <h1 v-bind:class="['title neon-title', {'fizzle' : this.flicker}]" @mouseover="hoverFlicker($event)">Chris Snowden</h1>
      <div class="subtitles-container" role="navigation">
        <h2 class="subtitle">          
          <a
            href="https://github.com/Recidvst"
            title="Check out my Github"
            target="_blank"
          >Github</a>
        </h2>
        <h2 class="subtitle">
          <a
            href="mailto:cdsnowden@gmail.com"
            title="Email me"
          >Email</a>
        </h2>
        <h2 class="subtitle">
          <a
            href="https://www.linkedin.com/in/cdsnowden/"
            title="Find me on LinkedIn"
            target="_blank"
          >LinkedIn</a>
        </h2>
      </div>
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
    return {
      flicker: false
    };
  },
  computed: {},
  methods: {
    // fire flicker on hover
    hoverFlicker(e) {
      this.flicker = true;
      setTimeout(e => {
        this.flicker = false;
      }, 810);
    }
  },
  mounted() {
    let subtitles = document.querySelectorAll("h2");
    Scrambler({
      target: "h1",
      random: [1000, 1500],
      speed: 120
    });
    // fire the flicker as soon as scramble finishes
    setTimeout(e => {
      this.flicker = true;
      setTimeout(e => {
        this.flicker = false;
      }, 810);
    }, 2500);
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
