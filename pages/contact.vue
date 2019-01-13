<template>
  <section class="container">
    <div>
      <h1 class="title">Contact me</h1>
    </div>
  </section>
</template>

<script>
import { Scrambler } from "~/node_modules/scrambling-letters/dist/scramble.min.js";

export default {
  components: {},
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
      random: [1000, 50000],
      speed: 120
    });
  }
};
</script>

<style>
</style>
