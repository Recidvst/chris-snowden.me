<template>
  <div class="error-template">
    <section class="page-container">
      <div class="page-title-container">
        <h1 v-if="error.statusCode === 404">404 - Page not found</h1>
        <h1 v-else>An error occurred</h1>
        <h2 v-if="error.statusCode === 404">Sorry, something's gone wrong...</h2>
        <NeonButton url="/" text="Go back" title="Back to the homepage"/>
      </div>
    </section>
  </div>
</template>

<script>
// components
import NeonButton from "~/components/NeonButton";

export default {
  components: {
    NeonButton
  },
  props: ["error"]
};
</script>
