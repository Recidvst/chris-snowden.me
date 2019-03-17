<template>
  <section class="page-container">
    <div class="page-title-container">
      <h1
        v-bind:class="['title neon-title', {'fizzle' : this.flicker}]"
        @mouseover="hoverFlicker($event)"
      >Chris Snowden</h1>
      <div class="logos-container" role="navigation">
        <a
          id="github"
          href="https://github.com/Recidvst"
          title="Find me on Github"
          target="_blank"
        >
          <img class="logo large-logo github" src="~/assets/images/github.svg" alt="Github logo">
        </a>
        <a
          id="linkedin"
          href="https://www.linkedin.com/in/cdsnowden/"
          title="Find me on LinkedIn"
          target="_blank"
        >
          <img class="logo large-logo linkedin" src="~/assets/images/linkedin.svg" alt="LinkedIn logo">
        </a>
        <a id="email-link" href="mailto:cdsnowden@gmail.com" title="Email me" @click.prevent="copyText($event)">cdsnowden@gmail.com</a>
        <span id="copiedNotice">copied to clipboard!</span>
      </div>
    </div>
  </section>
</template>

<script>
// scripts
import { Scrambler } from "~/node_modules/scrambling-letters/dist/scramble.min.js";
import { copyToClipboard } from '~/assets/js/utils';

export default {
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
    },
    // copy text to clipboard
    copyText(e) {
      e.preventDefault();
        let copyTarget = e.currentTarget;
        if (copyTarget) {
            let textToCopy = copyTarget.textContent;
            if (textToCopy) {
                copyToClipboard(textToCopy.trim());
                copyTarget.parentElement.classList.add('clicked');
                setTimeout( () => {
                    copyTarget.parentElement.classList.remove('clicked');
                }, 1500);
            }
        }
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
