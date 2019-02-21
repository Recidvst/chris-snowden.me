<template>
  <section class="page-container">
    <div class="page-title-container">
      <h1 v-bind:class="['title neon-title', {'fizzle' : this.flicker}]" @mouseover="hoverFlicker($event)">Chris Snowden</h1>
      <div class="subtitles-container" role="navigation">
        <a id="githubFixed" href="https://github.com/Recidvst" title="Find me on Github" target="_blank">
          <img class="logo large-logo github" src="~/assets/images/GitHub-Mark-Light-64px.png" alt="Github logo"/>
        </a>
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
