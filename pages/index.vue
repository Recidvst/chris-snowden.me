<template>
  <section class="container">
    <div>
      <!-- <logo/> -->
      <h1 class="title">Chris Snowden</h1>
    </div>
  </section>
</template>

<script>
import { Scrambler } from "~/assets/js/scramble.min.js";

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
    Scrambler("h1");
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
