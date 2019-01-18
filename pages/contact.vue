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
          netlify-honeypot="middle_name"
        >
          <div>
            <label>Name:
              <div class="input-wrapper">
                <input
                  type="text"
                  name="name"
                  tabindex="1"
                  @focus="activateInput($event)"
                  @blur="deactivateInput($event)"
                >
              </div>
            </label>
          </div>
          <div>
            <label>Email:
              <div class="input-wrapper">
                <input
                  type="email"
                  name="email"
                  tabindex="2"
                  @focus="activateInput($event)"
                  @blur="deactivateInput($event)"
                >
              </div>
            </label>
          </div>
          <div>
            <label>Message:
              <div class="input-wrapper">
                <textarea
                  name="message"
                  rows="6"
                  cols="40"
                  tabindex="3"
                  @focus="activateInput($event)"
                  @blur="deactivateInput($event)"
                ></textarea>
              </div>
            </label>
          </div>
          <!-- honeypot -->
          <div class="middle-name">
            <label>
              Don’t fill this out if you're human:
              <input name="middle_name">
            </label>
          </div>
          <div>
            <button
              type="submit"
              tabindex="4"
              v-bind:class="['cta-button cta-button-small', {'fizzle' : this.submitFlicker}]"
              @mouseover="hoverFlicker($event)"
              role="button"
            >Send</button>
          </div>
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
    return {
      submitFlicker: false,
      errors: []
    };
  },
  computed: {},
  methods: {
    activateInput(e) {
      let inputParent = e.target.parentElement;
      if (inputParent) {
        inputParent.classList.add("active-input");
      }
    },
    deactivateInput(e) {
      let inputParent = e.target.parentElement;
      if (inputParent) {
        inputParent.classList.remove("active-input");
      }
    },
    hoverFlicker(e) {
      console.log(e);
      this.submitFlicker = true;
      setTimeout(e => {
        this.submitFlicker = false;
      }, 810);
    }
  },
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
