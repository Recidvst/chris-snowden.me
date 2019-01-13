<template>
  <div class="page-container">
    <Header/>
    <div>
      <h1 v-if="error.statusCode === 404">404 - Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <h2 v-if="error.statusCode === 404">Sorry, something's gone wrong...</h2>
      <nuxt-link to="/">Back to home</nuxt-link>
    </div>
    <Footer/>
  </div>
</template>

<script>
// components
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
  components: {
    Header,
    Footer
  },
  props: ["error"]
};
</script>
