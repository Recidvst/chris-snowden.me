<template>
  <section class="container">
    <div>
      <!-- <logo/> -->
      <h1 class="title">Chris Snowden</h1>
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
    console.log("mounted");
    console.log(Scrambler);
    Scrambler({
      target: "h1",
      random: [1000, 50000],
      speed: 120
    });
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
