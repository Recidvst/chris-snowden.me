<template>
  <section class="page-container">
    <div class="page-title-container">
      <h1 class="title">Contact me</h1>
      <h2>Get in touch using the form below</h2>
      <div id="contact-form-container">
        <form
          name="contact-form"
          method="POST"
          action="/thank-you"
          data-netlify="true"
          netlify-honeypot="middle-name"
        >
          <p>
            <label>
              Your Name:
              <input type="text" name="name" tabindex="1">
            </label>
          </p>
          <p>
            <label>
              Your Email:
              <input type="email" name="email" tabindex="2">
            </label>
          </p>
          <p>
            <label>
              Message:
              <textarea name="message" tabindex="3"></textarea>
            </label>
          </p>
          <!-- honeypot -->
          <p class="hidthis">
            <label>
              Don’t fill this out if you're human:
              <input name="middle-name">
            </label>
          </p>
          <p>
            <button type="submit" tabindex="4">Send</button>
          </p>
        </form>
      </div>
      <h2>Alternatively try email or LinkedIn</h2>
      <ul>
        <li>
          <a
            href="mailto:cdsnowden@gmail.com"
            title="Send an email to cdsnowden@gmail.com"
            tabindex="5"
          >cdsnowden@gmail.com</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/cdsnowden"
            title="Find me on LinkedIn"
            target="_blank"
            tabindex="6"
          >LinkedIn</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
// components
import NeonButton from "~/components/NeonButton";
// scripts
import { Scrambler } from "~/node_modules/scrambling-letters/dist/scramble.min.js";

export default {
  components: {},
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
