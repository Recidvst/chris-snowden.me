<template>
  <div>
    <Header/>
    <nuxt/>
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
  data() {
    return {};
  }
};
</script>
