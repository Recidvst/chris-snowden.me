<template>
  <div class="error-template">
    <section class="page-container">
      <div class="page-title-container">
        <h1
          v-if="error.statusCode === 404"
          v-bind:class="['title neon-title', {'fizzle' : this.flicker}]"
          @mouseover="hoverFlicker($event)"
        >404 - Page not found</h1>
        <h1
          v-else
          v-bind:class="['title neon-title', {'fizzle' : this.flicker}]"
          @mouseover="hoverFlicker($event)"
        >An error occurred</h1>
        <h2>
          <nuxt-link
            to="/"
            title="Back to homepage"
          >Sorry, something's gone wrong... why not head back to the homepage?</nuxt-link>
        </h2>
      </div>
    </section>
    <Lines/>
  </div>
</template>

<script>
// scripts
import Scrambler from "~/node_modules/scrambling-letters/dist/scrambler.esm.js";
// svg lines
import Lines from "~/components/Lines";

export default {
  components: {
    Lines
  },
  data() {
    return {
      flicker: false
    };
  },
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
  },
  props: ["error"]
};
</script>
